import * as THREE from 'three';
import { soundEngine } from './audio.js';

export class PoliceOfficer {
  constructor(scene, position, weaponType = 'pistol') {
    this.scene = scene;
    this.mesh = new THREE.Group();
    this.mesh.position.copy(position);

    this.health = 65;
    this.isDead = false;
    this.weaponType = weaponType; // 'pistol' or 'm4'
    this.speed = 6.2;
    this.shootCooldown = 1.2;
    this.lastShootTime = 0;
    this.animTime = 0;
    this.ammoDropped = false;

    this.buildOfficerMesh();
    this.scene.add(this.mesh);
  }

  buildOfficerMesh() {
    // VCPD Police Uniform (Navy Blue / Khaki shirt, Navy pants, Gold Badge)
    const shirtMat = new THREE.MeshStandardMaterial({ color: 0x1f3b5c, roughness: 0.6 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x0f1c2e, roughness: 0.7 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xd4a373, roughness: 0.8 });

    // Torso with Police Badge
    const torsoGeo = new THREE.BoxGeometry(0.55, 0.75, 0.35);
    this.torso = new THREE.Mesh(torsoGeo, shirtMat);
    this.torso.position.y = 1.25;
    this.mesh.add(this.torso);

    const badgeGeo = new THREE.BoxGeometry(0.1, 0.1, 0.04);
    const badgeMat = new THREE.MeshBasicMaterial({ color: 0xffbe0b });
    const badge = new THREE.Mesh(badgeGeo, badgeMat);
    badge.position.set(-0.15, 1.35, 0.18);
    this.mesh.add(badge);

    // Head
    const headGeo = new THREE.SphereGeometry(0.22, 8, 8);
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.y = 1.82;
    this.mesh.add(head);

    // Police Cap
    const capGeo = new THREE.CylinderGeometry(0.3, 0.28, 0.16, 8);
    const capMat = new THREE.MeshStandardMaterial({ color: 0x0f1c2e });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.set(0, 1.95, 0);
    this.mesh.add(cap);

    // Limbs
    const limbGeo = new THREE.BoxGeometry(0.18, 0.65, 0.18);
    this.leftArm = new THREE.Mesh(limbGeo, shirtMat);
    this.leftArm.position.set(-0.38, 1.2, 0);
    this.mesh.add(this.leftArm);

    this.rightArm = new THREE.Mesh(limbGeo, shirtMat);
    this.rightArm.position.set(0.38, 1.2, 0);
    this.mesh.add(this.rightArm);

    // Gun in right hand
    const gunGeo = new THREE.BoxGeometry(0.08, 0.12, 0.3);
    const gunMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.8 });
    const gun = new THREE.Mesh(gunGeo, gunMat);
    gun.position.set(0, -0.3, 0.12);
    this.rightArm.add(gun);

    const legGeo = new THREE.BoxGeometry(0.22, 0.8, 0.22);
    this.leftLeg = new THREE.Mesh(legGeo, pantsMat);
    this.leftLeg.position.set(-0.16, 0.45, 0);
    this.mesh.add(this.leftLeg);

    this.rightLeg = new THREE.Mesh(legGeo, pantsMat);
    this.rightLeg.position.set(0.16, 0.45, 0);
    this.mesh.add(this.rightLeg);
  }

  takeDamage(amount) {
    if (this.isDead) return;
    this.health -= amount;
    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    this.isDead = true;
    this.mesh.rotation.x = -Math.PI / 2;
    this.mesh.position.y = 0.2;

    // Blood puddle decal
    const bloodGeo = new THREE.CircleGeometry(0.75, 16);
    bloodGeo.rotateX(-Math.PI / 2);
    const bloodMat = new THREE.MeshBasicMaterial({ color: 0x880011, transparent: true, opacity: 0.85 });
    const blood = new THREE.Mesh(bloodGeo, bloodMat);
    blood.position.set(this.mesh.position.x, 0.02, this.mesh.position.z);
    this.scene.add(blood);

    this.dropAmmo();
  }

  dropAmmo() {
    if (this.ammoDropped) return;
    this.ammoDropped = true;

    // 3D Ammo box on ground
    const boxGeo = new THREE.BoxGeometry(0.45, 0.25, 0.35);
    const boxMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x004466,
      roughness: 0.4
    });
    this.ammoMesh = new THREE.Mesh(boxGeo, boxMat);
    this.ammoMesh.position.set(
      this.mesh.position.x + (Math.random() - 0.5) * 1.0,
      0.2,
      this.mesh.position.z + (Math.random() - 0.5) * 1.0
    );
    this.scene.add(this.ammoMesh);
    this.ammoValue = 30; // +30 ammo
    this.cashValue = 120; // +$120 cash
  }

  update(delta, playerPos, onShootAtPlayer) {
    if (this.isDead) return;

    const dist = this.mesh.position.distanceTo(playerPos);

    // Aim toward player
    const toPlayer = playerPos.clone().sub(this.mesh.position);
    toPlayer.y = 0;
    this.mesh.rotation.y = Math.atan2(toPlayer.x, toPlayer.z);

    if (dist > 8.0) {
      // Sprint towards player
      this.animTime += delta * 12;
      const fwd = new THREE.Vector3(Math.sin(this.mesh.rotation.y), 0, Math.cos(this.mesh.rotation.y));
      this.mesh.position.addScaledVector(fwd, this.speed * delta);

      // Animation
      const swing = Math.sin(this.animTime);
      this.leftArm.rotation.x = swing * 0.7;
      this.rightArm.rotation.x = -Math.PI / 2.5; // Gun forward
      this.leftLeg.rotation.x = -swing * 0.8;
      this.rightLeg.rotation.x = swing * 0.8;
    } else {
      // In combat range: stop and shoot
      this.rightArm.rotation.x = -Math.PI / 2;
      this.leftArm.rotation.x = -Math.PI / 3;

      const now = performance.now() / 1000;
      if (now - this.lastShootTime > this.shootCooldown) {
        this.lastShootTime = now;
        soundEngine.playShoot('pistol');
        if (onShootAtPlayer) {
          onShootAtPlayer(12); // Damage player
        }
      }
    }
  }
}

export class PoliceSystem {
  constructor(scene, vehicleManager) {
    this.scene = scene;
    this.vehicleManager = vehicleManager;
    this.wantedStars = 0;
    this.officers = [];
    this.cruisers = [];
    this.timeSinceCrime = 0;
    this.spawnTimer = 0;
  }

  addCrime(stars = 1) {
    const oldStars = this.wantedStars;
    this.wantedStars = Math.min(5, Math.max(this.wantedStars, stars));
    this.timeSinceCrime = 0;

    if (this.wantedStars > oldStars) {
      soundEngine.playWantedAlert();
      // Siren will only sound if cruiser is near or 5 stars!
    }
  }

  clearWantedLevel() {
    this.wantedStars = 0;
    soundEngine.stopPoliceSiren();
    // Dismiss cruisers
    this.cruisers.forEach(c => {
      c.sirenActive = false;
    });
  }

  spawnReinforcements(playerPos) {
    // Spawn police cruiser nearby on road
    const angle = Math.random() * Math.PI * 2;
    const dist = 45 + Math.random() * 20;
    const spawnPos = new THREE.Vector3(
      playerPos.x + Math.sin(angle) * dist,
      0,
      playerPos.z + Math.cos(angle) * dist
    );

    // Spawn cruiser
    const cruiser = this.vehicleManager.spawnPoliceCruiser(spawnPos, angle + Math.PI);
    this.cruisers.push(cruiser);

    // Spawn 2 Officers inside/beside cruiser
    [-1.8, 1.8].forEach(offset => {
      const offPos = spawnPos.clone().add(new THREE.Vector3(offset, 0, 0));
      const officer = new PoliceOfficer(this.scene, offPos, this.wantedStars >= 3 ? 'm4' : 'pistol');
      this.officers.push(officer);
    });
  }

  update(delta, playerPos, playerVehicle, onDamagePlayer) {
    // Proximity & Police Cruiser Siren Management
    // Sirens belong strictly to police cruisers! Usual cars have only the horn.
    let shouldSirenPlay = false;

    if (playerVehicle && playerVehicle.type === 'police' && playerVehicle.sirenActive) {
      // 1. Player is driving a police cruiser and toggled the siren ON
      shouldSirenPlay = true;
    } else if (this.wantedStars === 5) {
      // 2. Maximum 5-star alert: siren sounds if active AI police cruisers exist
      const hasCruiser = this.cruisers.some(c => !c.isWrecked && !c.isPlayerOccupied && c !== playerVehicle);
      if (hasCruiser) {
        shouldSirenPlay = true;
      }
    } else if (this.wantedStars > 0) {
      // 3. Wanted level: only play siren if an AI police cruiser is within 38m proximity
      for (let i = 0; i < this.cruisers.length; i++) {
        const c = this.cruisers[i];
        if (!c.isWrecked && !c.isPlayerOccupied && c !== playerVehicle) {
          const d = c.mesh.position.distanceTo(playerPos);
          if (d < 38) {
            shouldSirenPlay = true;
            break;
          }
        }
      }
    }

    if (shouldSirenPlay) {
      soundEngine.startPoliceSiren();
    } else {
      soundEngine.stopPoliceSiren();
    }

    if (this.wantedStars === 0) {
      return;
    }

    this.timeSinceCrime += delta;

    // Check if player evaded police search radius (out of range for 14 seconds)
    let minCopDist = Infinity;
    this.officers.forEach(cop => {
      if (!cop.isDead) {
        minCopDist = Math.min(minCopDist, cop.mesh.position.distanceTo(playerPos));
      }
    });

    if (minCopDist > 75 && this.timeSinceCrime > 14) {
      // Cooldown wanted stars
      this.wantedStars = Math.max(0, this.wantedStars - 1);
      this.timeSinceCrime = 0;
      if (this.wantedStars === 0) {
        this.clearWantedLevel();
      }
    }

    // Spawn reinforcements dynamically based on wanted level
    this.spawnTimer += delta;
    const spawnInterval = Math.max(5, 18 - this.wantedStars * 2.5);
    const maxCruisers = this.wantedStars * 2;

    if (this.spawnTimer > spawnInterval && this.cruisers.length < maxCruisers) {
      this.spawnTimer = 0;
      this.spawnReinforcements(playerPos);
    }

    // Update Cruiser Pursuit AI (Only for non-player occupied cruisers)
    this.cruisers.forEach(c => {
      if (!c.isWrecked && !c.isPlayerOccupied && c !== playerVehicle) {
        // Steer and accelerate towards player
        const toPlayer = playerPos.clone().sub(c.mesh.position);
        toPlayer.y = 0;
        const targetAngle = Math.atan2(toPlayer.x, toPlayer.z) + Math.PI; // Invert for forward vector
        
        let diff = targetAngle - c.mesh.rotation.y;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;

        const inputs = {
          forward: true,
          backward: false,
          left: diff > 0.15,
          right: diff < -0.15,
          handbrake: Math.abs(diff) > 1.2
        };

        c.updatePhysics(delta, inputs, null);

        // Ram player if close
        if (c.mesh.position.distanceTo(playerPos) < 4.0) {
          if (onDamagePlayer) {
            onDamagePlayer(8 * delta);
          }
        }
      }
    });

    // Update Officers Foot AI
    this.officers.forEach(cop => {
      cop.update(delta, playerPos, (dmg) => {
        if (onDamagePlayer) {
          onDamagePlayer(dmg);
        }
      });
    });
  }

  collectPoliceDrops(playerPos, radius = 2.8) {
    let gained = { ammo: 0, cash: 0 };
    this.officers.forEach(cop => {
      if (cop.isDead && cop.ammoMesh) {
        if (cop.ammoMesh.position.distanceTo(playerPos) < radius) {
          gained.ammo += cop.ammoValue;
          gained.cash += cop.cashValue;
          this.scene.remove(cop.ammoMesh);
          cop.ammoMesh.geometry.dispose();
          cop.ammoMesh.material.dispose();
          cop.ammoMesh = null;
          soundEngine.playMoney();
        }
      }
    });
    return gained;
  }
}
