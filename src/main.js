import * as THREE from 'three';
import { soundEngine } from './audio.js';
import { City } from './city.js';
import { Player } from './player.js';
import { VehicleManager } from './vehicles.js';
import { NPCManager } from './npcs.js';
import { PoliceSystem } from './police.js';
import { WeaponManager } from './weapons.js';
import { UIManager } from './ui.js';

class Game {
  constructor() {
    this.canvas = document.getElementById('game-canvas');
    this.container = document.getElementById('game-container');
    this.startScreen = document.getElementById('start-screen');
    this.startBtn = document.getElementById('start-btn');
    this.crosshair = document.getElementById('crosshair');

    this.clock = new THREE.Clock();
    this.isShooting = false;
    this.isGameRunning = false;

    // Inputs state
    this.inputs = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      sprint: false,
      jump: false,
      aiming: false,
      handbrake: false
    };

    this.initScene();
    this.initSystems();
    this.setupControls();
    this.setupWindowResize();

    // Start Screen Click
    this.startBtn.addEventListener('click', () => {
      this.startGame();
    });
  }

  initScene() {
    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x160826); // Deep 80s sunset purple
    this.scene.fog = new THREE.FogExp2(0x28103c, 0.0035);

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    // 4. Miami Sunset Lighting
    const ambientLight = new THREE.AmbientLight(0xff77aa, 0.65);
    this.scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xff88bb, 0x112244, 0.6);
    this.scene.add(hemiLight);

    // Sunset Directional Sun Light
    this.sunLight = new THREE.DirectionalLight(0xffbe0b, 1.6);
    this.sunLight.position.set(120, 45, -150);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 10;
    this.sunLight.shadow.camera.far = 400;
    this.sunLight.shadow.camera.left = -160;
    this.sunLight.shadow.camera.right = 160;
    this.sunLight.shadow.camera.top = 160;
    this.sunLight.shadow.camera.bottom = -160;
    this.sunLight.shadow.bias = -0.0005;
    this.scene.add(this.sunLight);

    // Distant Sunset Sun Disk on Horizon
    const sunGeo = new THREE.SphereGeometry(35, 16, 16);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xff3b30 });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    sunMesh.position.set(400, 30, -500);
    this.scene.add(sunMesh);
  }

  initSystems() {
    this.ui = new UIManager();
    this.city = new City(this.scene);
    this.player = new Player(this.scene, this.camera, this.canvas);
    this.vehicles = new VehicleManager(this.scene, this.city);
    this.npcs = new NPCManager(this.scene, this.city, this.city.traffic);
    this.police = new PoliceSystem(this.scene, this.vehicles);
    this.weapons = new WeaponManager(this.scene, this.camera);
    this.isSleeping = false;

    // Player death and respawn callbacks
    this.player.onDeath = () => {
      this.ui.showWastedScreen(() => {
        this.police.clearWantedLevel();
      });
    };
    this.player.onRespawn = () => {
      this.ui.showAnnouncement("RESPAWNED AT SAFEHOUSE BED", 3000);
    };
  }

  startGame() {
    soundEngine.init();
    soundEngine.resume();
    this.startScreen.style.display = 'none';
    this.player.requestLock();
    this.isGameRunning = true;
    this.ui.showAnnouncement("WELCOME TO VICE CITY");
    this.animate();
  }

  setupControls() {
    // Keyboard Listeners
    window.addEventListener('keydown', (e) => {
      if (!this.isGameRunning) return;
      const key = e.code;

      if (key === 'KeyW' || key === 'ArrowUp') this.inputs.forward = true;
      if (key === 'KeyS' || key === 'ArrowDown') this.inputs.backward = true;
      if (key === 'KeyA' || key === 'ArrowLeft') this.inputs.left = true;
      if (key === 'KeyD' || key === 'ArrowRight') this.inputs.right = true;
      if (key === 'ShiftLeft' || key === 'ShiftRight') this.inputs.sprint = true;
      if (key === 'Space') {
        this.inputs.jump = true;
        this.inputs.handbrake = true;
      }

      // Enter/Exit Car (F or Enter)
      if (key === 'KeyF' || key === 'Enter') {
        this.handleVehicleInteract();
      }

      // Reload / Radio station
      if (key === 'KeyR') {
        if (this.player.inVehicle) {
          const newStation = soundEngine.nextStation();
          this.ui.radioText.innerText = newStation;
          this.ui.showAnnouncement(`RADIO: ${newStation}`, 2000);
        } else {
          this.weapons.reload();
        }
      }

      // Horn (Civilian) / Siren (Police) OR Sleep in Bed (on foot)
      if (key === 'KeyE') {
        if (this.player.inVehicle && this.player.currentVehicle) {
          if (this.player.currentVehicle.type === 'police') {
            this.player.currentVehicle.toggleSiren();
            const status = this.player.currentVehicle.sirenActive ? 'ON' : 'OFF';
            this.ui.showAnnouncement(`POLICE SIREN & LIGHTS: ${status}`, 1500);
          } else {
            // Usual cars have strictly the horn only!
            soundEngine.playHorn();
            this.ui.showAnnouncement("CAR HORN", 800);
          }
        } else if (!this.player.inVehicle) {
          // Check if player is standing near Tommy's Safehouse Bed
          const playerPos = this.player.mesh.position;
          const bedZone = this.city.interactivityZones.find(z => z.type === 'safehouse_bed');
          if (bedZone && bedZone.box.containsPoint(playerPos)) {
            this.handleSleepInBed(bedZone.position);
          }
        }
      }

      // World Map Modal Toggle
      if (key === 'KeyM') {
        this.ui.toggleMap();
      }

      // Camera POV Mode Toggle (V or C)
      if (key === 'KeyV' || key === 'KeyC') {
        const mode = this.player.toggleCameraMode();
        const modeNames = {
          FIRST_PERSON: 'CAMERA: 1ST PERSON POV',
          THIRD_PERSON: 'CAMERA: 3RD PERSON (FAR)',
          THIRD_SHOULDER: 'CAMERA: 3RD PERSON (SHOULDER)'
        };
        this.ui.showAnnouncement(modeNames[mode] || 'CAMERA VIEW CHANGED', 2000);
      }

      // Weapons 1-6
      if (key === 'Digit1') this.switchWeapon(0);
      if (key === 'Digit2') this.switchWeapon(1);
      if (key === 'Digit3') this.switchWeapon(2);
      if (key === 'Digit4') this.switchWeapon(3);
      if (key === 'Digit5') this.switchWeapon(4);
      if (key === 'Digit6') this.switchWeapon(5);
    });

    window.addEventListener('keyup', (e) => {
      const key = e.code;
      if (key === 'KeyW' || key === 'ArrowUp') this.inputs.forward = false;
      if (key === 'KeyS' || key === 'ArrowDown') this.inputs.backward = false;
      if (key === 'KeyA' || key === 'ArrowLeft') this.inputs.left = false;
      if (key === 'KeyD' || key === 'ArrowRight') this.inputs.right = false;
      if (key === 'ShiftLeft' || key === 'ShiftRight') this.inputs.sprint = false;
      if (key === 'Space') {
        this.inputs.jump = false;
        this.inputs.handbrake = false;
      }
    });

    // Mouse Listeners
    window.addEventListener('mousedown', (e) => {
      if (!this.isGameRunning || this.ui.isMapOpen) return;
      if (!this.player.isPointerLocked) {
        this.player.requestLock();
      }

      // Left click = Fire / Punch (supports holding down for continuous fire)
      if (e.button === 0) {
        this.isShooting = true;
        this.handleFireWeapon();
      }

      // Right click = Aim zoom
      if (e.button === 2) {
        this.inputs.aiming = true;
        this.crosshair.classList.add('aiming');
      }
    });

    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        this.isShooting = false;
      }
      if (e.button === 2) {
        this.inputs.aiming = false;
        this.crosshair.classList.remove('aiming');
      }
    });

    window.addEventListener('contextmenu', (e) => e.preventDefault());

    // Scroll wheel switches weapons
    window.addEventListener('wheel', (e) => {
      if (e.deltaY > 0) this.switchWeapon((this.weapons.currentIndex + 1) % this.weapons.weapons.length);
      else if (e.deltaY < 0) this.switchWeapon((this.weapons.currentIndex - 1 + this.weapons.weapons.length) % this.weapons.weapons.length);
    });
  }

  switchWeapon(index) {
    this.weapons.selectWeapon(index);
    this.player.setHeldWeapon(index);
  }

  handleFireWeapon() {
    if (this.player.inVehicle) {
      // In car drive-by shooting
      soundEngine.playShoot('smg');
      return;
    }

    const origin = this.player.getFireOrigin();
    const dir = this.player.getFireDirection();

    // Alert nearby NPCs of gunfire
    this.npcs.notifyGunfire(origin);

    const fired = this.weapons.fire(
      origin,
      dir,
      {
        npcs: this.npcs.npcs,
        police: this.police.officers,
        vehicles: this.vehicles.vehicles,
        colliders: this.city.colliders
      },
      (hit, damage) => {
        // On hit callback
        this.ui.showHitmarker();

        if (hit.targetType === 'npc') {
          const wasDead = hit.target.isDead;
          hit.target.takeDamage(damage, origin);
          // ONLY add or increase star if NPC was killed!
          if (!wasDead && hit.target.isDead) {
            const nextStars = Math.min(5, this.police.wantedStars + 1);
            this.police.addCrime(nextStars);
            this.ui.showAnnouncement(`WANTED: ${nextStars} STAR(S) - NPC ELIMINATED!`);
          }
        } else if (hit.targetType === 'police') {
          const wasDead = hit.target.isDead;
          hit.target.takeDamage(damage);
          // ONLY add or increase star if Police Officer was killed!
          if (!wasDead && hit.target.isDead) {
            const nextStars = Math.min(5, Math.max(2, this.police.wantedStars + 1));
            this.police.addCrime(nextStars);
            this.ui.showAnnouncement(`WANTED: ${nextStars} STAR(S) - OFFICER DOWN!`);
          }
        } else if (hit.targetType === 'vehicle') {
          hit.target.takeDamage(damage);
        }
      }
    );

    // Trigger visual weapon recoil on player
    if (fired) {
      this.player.triggerRecoil();
    }
  }

  handleVehicleInteract() {
    if (this.player.inVehicle) {
      this.player.exitVehicle();
      this.ui.showAnnouncement("EXITED VEHICLE");
    } else {
      const nearCar = this.vehicles.getNearestVehicle(this.player.mesh.position, 5.5);
      if (nearCar) {
        const carName = nearCar.type === 'police' ? "POLICE CRUISER" : nearCar.type.toUpperCase();
        this.ui.showAnnouncement(`JACKING ${carName}...`);
        this.player.startCarjacking(nearCar, () => {
          if (nearCar.type === 'police') {
            this.ui.showAnnouncement("DRIVING POLICE CRUISER - PRESS E FOR SIREN & LIGHTS!");
          } else {
            this.ui.showAnnouncement(`DRIVING ${carName}`);
          }
        });
      }
    }
  }

  setupWindowResize() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  checkInteractiveTriggers() {
    const playerPos = this.player.inVehicle && this.player.currentVehicle
      ? this.player.currentVehicle.mesh.position
      : this.player.mesh.position;

    let promptText = null;

    // Check near car to enter (Civilian or Police)
    if (!this.player.inVehicle) {
      const nearCar = this.vehicles.getNearestVehicle(playerPos, 5.5);
      if (nearCar) {
        const carTitle = nearCar.type === 'police' ? 'POLICE CRUISER' : nearCar.type.toUpperCase();
        promptText = `<span class="key-tag">F</span> DRIVE ${carTitle}`;
      }
    } else {
      const isPolice = this.player.currentVehicle && this.player.currentVehicle.type === 'police';
      const hornHint = isPolice ? ` &nbsp;|&nbsp; <span class="key-tag">E</span> SIREN & LIGHTS` : ` &nbsp;|&nbsp; <span class="key-tag">E</span> HORN`;
      promptText = `<span class="key-tag">F</span> EXIT VEHICLE &nbsp;|&nbsp; <span class="key-tag">R</span> RADIO${hornHint}`;
    }

    // Check Ammu-Nation & Pay 'n' Spray
    this.city.interactivityZones.forEach(zone => {
      if (zone.box.containsPoint(playerPos)) {
        if (zone.type === 'ammunation' && !this.player.inVehicle) {
          promptText = `<span class="key-tag">AUTO</span> AMMU-NATION: AMMO & ARMOR REFILLED`;
          this.weapons.refillAllAmmo();
          this.player.healAndArmor();
          this.ui.showAnnouncement("AMMU-NATION: FULL AMMO & ARMOR RESTORED");
        } else if (zone.type === 'pay_n_spray' && this.player.inVehicle) {
          const veh = this.player.currentVehicle;
          if (veh.health < 100 || this.police.wantedStars > 0) {
            veh.repair();
            this.police.clearWantedLevel();
            soundEngine.playMoney();
            this.ui.showAnnouncement("PAY 'N' SPRAY: REPAIRED & HEAT CLEARED!");
          }
        } else if (zone.type === 'safehouse_bed' && !this.player.inVehicle) {
          promptText = `<span class="key-tag">E</span> SLEEP IN BED (SET RESPAWN POINT)`;
        }
      }
    });

    this.ui.setPrompt(promptText);

    // Collect dropped money wallets nearby
    const earned = this.npcs.collectNearbyWallets(playerPos, 3.0);
    if (earned > 0) {
      this.player.money += earned;
      this.ui.showAnnouncement(`PICKED UP $${earned}`, 1500);
    }

    // Collect dropped police weapon & ammo crates
    const copDrop = this.police.collectPoliceDrops(playerPos, 3.2);
    if (copDrop.ammo > 0 || copDrop.cash > 0) {
      this.player.money += copDrop.cash;
      const currentW = this.weapons.getCurrentWeapon();
      if (currentW.type !== 'melee') {
        currentW.reserveAmmo += copDrop.ammo;
      }
      this.ui.showAnnouncement(`POLICE CRATE: +$${copDrop.cash} & +${copDrop.ammo} AMMO`, 2000);
    }
  }

  handleSleepInBed(bedPos) {
    if (this.isSleeping || this.player.isDead) return;
    this.isSleeping = true;
    soundEngine.playSleepChime();

    // Set permanent spawn point to this safehouse bed
    this.player.setSpawnPoint(bedPos.clone(), -Math.PI / 2);

    this.ui.showSleepScreen(
      () => {
        // Midpoint of sleep fade: full heal, armor, and clear wanted heat
        this.player.health = 100;
        this.player.armor = 100;
        this.police.clearWantedLevel();
        this.weapons.refillAllAmmo();
      },
      () => {
        // Awaken refreshed
        this.isSleeping = false;
        this.ui.showAnnouncement("RESPAWN POINT SET! HEALTH & ARMOR RESTORED", 3500);
      }
    );
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.getElapsedTime();

    if (this.isGameRunning) {
      // Continuous automatic fire if holding left mouse button
      if (this.isShooting && !this.player.inVehicle && !this.ui.isMapOpen) {
        this.handleFireWeapon();
      }

      // 1. Update City animations (water waves, palm trees, signs)
      this.city.update(delta, time);

      // 2. Update Vehicle Physics FIRST (if driving) to keep camera in frame-perfect sync
      if (this.player.inVehicle && this.player.currentVehicle) {
        this.player.currentVehicle.updatePhysics(delta, this.inputs, this.city.colliders);
      }

      // 3. Update Player Controller & Camera
      this.player.update(delta, this.inputs, this.city.colliders);

      const playerPos = this.player.inVehicle && this.player.currentVehicle
        ? this.player.currentVehicle.mesh.position
        : this.player.mesh.position;
      const isPlayerOnFoot = !this.player.inVehicle;

      // 4. Update Ambient Vehicles & Traffic (with crash physics, traffic lights, and stopping for police, NPCs, and player!)
      this.vehicles.update(
        delta,
        this.player.currentVehicle,
        this.city.colliders,
        playerPos,
        isPlayerOnFoot,
        this.police.officers,
        this.npcs.npcs,
        this.city.traffic
      );

      // Check Vehicle to Pedestrian collisions (running over NPCs & Police)
      this.vehicles.checkPedestrianCollisions(
        this.npcs.npcs,
        this.police.officers,
        (target, targetType, car) => {
          if (car === this.player.currentVehicle || car.isPlayerOccupied) {
            const nextStars = Math.min(5, this.police.wantedStars + 1);
            this.police.addCrime(nextStars);
            const label = targetType === 'police' ? 'OFFICER RUN OVER!' : 'VEHICULAR HOMICIDE!';
            this.ui.showAnnouncement(`WANTED: ${nextStars} STAR(S) - ${label}`);
          }
        },
        delta,
        this.player.currentVehicle
      );

      // 5. Update Pedestrians / NPCs
      const aimDirection = this.player.getFireDirection();
      this.npcs.update(delta, this.player.mesh.position, this.inputs.aiming);

      // 6. Update Police AI & Wanted System
      this.police.update(delta, playerPos, this.player.currentVehicle, (dmg) => {
        this.player.takeDamage(dmg);
      });

      // 7. Update Weapons (Tracers, Rockets, Explosions)
      this.weapons.update(delta);

      // 8. Interactive Triggers (Pay 'n' Spray, Ammu-Nation, Money)
      this.checkInteractiveTriggers();

      // 9. Update UI & Radar Minimap
      this.ui.updateHUD(this.player, this.weapons, this.police);
      this.ui.drawRadar(this.player, this.city, this.vehicles.vehicles, this.npcs.npcs, this.police);

      // 10. Update Full Map if open
      if (this.ui.isMapOpen) {
        this.ui.drawFullMap(this.player, this.city, this.vehicles.vehicles, this.police);
      }
    }

    // Render Scene
    this.renderer.render(this.scene, this.camera);
  }
}

// Instantiate Game on load
window.addEventListener('DOMContentLoaded', () => {
  new Game();
});
