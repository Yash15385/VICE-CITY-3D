import * as THREE from 'three';
import { soundEngine } from './audio.js';

export class Player {
  constructor(scene, camera, domElement) {
    this.scene = scene;
    this.camera = camera;
    this.domElement = domElement;

    // Position & Transform
    this.mesh = new THREE.Group();
    this.mesh.position.set(60, 0, -20); // Spawn on Ocean Drive sidewalk

    // Stats
    this.health = 100;
    this.armor = 100;
    this.money = 2500;
    this.isDead = false;

    // Movement Physics
    this.velocity = new THREE.Vector3();
    this.walkSpeed = 5.2;
    this.sprintSpeed = 10.5;
    this.jumpForce = 7.5;
    this.gravity = 20.0;
    this.isGrounded = true;
    this.isAiming = false;
    this.isSprinting = false;

    // Vehicle State
    this.inVehicle = false;
    this.currentVehicle = null;

    // Camera & View Mode
    this.cameraMode = 'FIRST_PERSON'; // 'FIRST_PERSON', 'THIRD_PERSON', 'THIRD_SHOULDER'
    this.cameraDistance = 4.2;
    this.cameraPitch = 0.0;
    this.cameraYaw = 0.0;
    this.cameraTarget = new THREE.Vector3();
    this.defaultFov = 65;
    this.aimFov = 48;

    // First-Person Viewmodel & Recoil
    this.recoilZ = 0;
    this.recoilRotX = 0;
    this.fpBobTimer = 0;
    this.fpWeaponRig = null;
    this.fpWeapons = [];

    // Carjacking Animation State
    this.isCarjacking = false;
    this.carjackingTimer = 0;
    this.carjackingVehicle = null;
    this.ejectedDriver = null;
    this.carjackSound1 = false;
    this.carjackSound2 = false;
    this.onCarjackComplete = null;

    // Locomotion Animation
    this.animTime = 0;

    // Collision Box
    this.box = new THREE.Box3();

    this.buildTommyMesh();
    this.buildFirstPersonRig();
    this.scene.add(this.mesh);
    this.setupMouseLook();
  }

  buildTommyMesh() {
    // 80s Tommy Vercetti: Turquoise floral shirt, blue jeans, white sneakers
    const shirtMat = new THREE.MeshStandardMaterial({
      color: 0x00c4cc, // Turquoise floral base
      roughness: 0.7
    });
    const jeansMat = new THREE.MeshStandardMaterial({
      color: 0x224488, // Blue denim
      roughness: 0.8
    });
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xe0ac69,
      roughness: 0.7
    });
    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x1a110a,
      roughness: 0.6
    });
    const shoeMat = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
      roughness: 0.4
    });

    // 1. Torso
    const torsoGeo = new THREE.BoxGeometry(0.58, 0.76, 0.34);
    this.torso = new THREE.Mesh(torsoGeo, shirtMat);
    this.torso.position.y = 1.25;
    this.torso.castShadow = true;
    this.mesh.add(this.torso);

    // 2. Head & Hair
    const headGeo = new THREE.SphereGeometry(0.23, 8, 8);
    this.head = new THREE.Mesh(headGeo, skinMat);
    this.head.position.y = 1.84;
    this.mesh.add(this.head);

    const hairGeo = new THREE.BoxGeometry(0.38, 0.18, 0.38);
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.set(0, 1.98, -0.02);
    this.mesh.add(hair);

    // Sunglasses
    const glassesGeo = new THREE.BoxGeometry(0.32, 0.08, 0.12);
    const glassesMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
    const glasses = new THREE.Mesh(glassesGeo, glassesMat);
    glasses.position.set(0, 1.86, 0.19);
    this.mesh.add(glasses);

    // 3. Arms
    const limbGeo = new THREE.BoxGeometry(0.18, 0.65, 0.18);
    this.leftArm = new THREE.Mesh(limbGeo, shirtMat);
    this.leftArm.position.set(-0.39, 1.2, 0);
    this.mesh.add(this.leftArm);

    this.rightArm = new THREE.Mesh(limbGeo, shirtMat);
    this.rightArm.position.set(0.39, 1.2, 0);
    this.mesh.add(this.rightArm);

    // 4. Weapon Attachment Point in right hand
    this.weaponSlot = new THREE.Group();
    this.weaponSlot.position.set(0, -0.32, 0.2);
    this.rightArm.add(this.weaponSlot);
    this.buildWeaponMeshes();

    // 5. Legs
    const legGeo = new THREE.BoxGeometry(0.24, 0.82, 0.24);
    this.leftLeg = new THREE.Mesh(legGeo, jeansMat);
    this.leftLeg.position.set(-0.16, 0.45, 0);
    this.leftLeg.castShadow = true;
    this.mesh.add(this.leftLeg);

    this.rightLeg = new THREE.Mesh(legGeo, jeansMat);
    this.rightLeg.position.set(0.16, 0.45, 0);
    this.rightLeg.castShadow = true;
    this.mesh.add(this.rightLeg);

    // Shoes
    const shoeGeo = new THREE.BoxGeometry(0.24, 0.14, 0.34);
    const leftShoe = new THREE.Mesh(shoeGeo, shoeMat);
    leftShoe.position.set(0, -0.42, 0.05);
    this.leftLeg.add(leftShoe);

    const rightShoe = new THREE.Mesh(shoeGeo, shoeMat);
    rightShoe.position.set(0, -0.42, 0.05);
    this.rightLeg.add(rightShoe);
  }

  buildWeaponMeshes() {
    this.weaponMeshes = [];
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a1a24, metalness: 0.8, roughness: 0.3 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x6e3d1b, roughness: 0.7 });

    // 0: Fists (empty)
    const fistGroup = new THREE.Group();
    this.weaponSlot.add(fistGroup);
    this.weaponMeshes.push(fistGroup);

    // 1: 9mm Pistol
    const pistolGroup = new THREE.Group();
    const pBarrel = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.12, 0.35), darkMat);
    pBarrel.position.set(0, 0, 0.1);
    const pGrip = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.18, 0.1), woodMat);
    pGrip.position.set(0, -0.1, 0);
    pGrip.rotation.x = -0.2;
    pistolGroup.add(pBarrel, pGrip);
    this.weaponSlot.add(pistolGroup);
    this.weaponMeshes.push(pistolGroup);

    // 2: Uzi SMG
    const uziGroup = new THREE.Group();
    const uBody = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.16, 0.45), darkMat);
    const uMag = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.28, 0.08), darkMat);
    uMag.position.set(0, -0.16, 0);
    uziGroup.add(uBody, uMag);
    this.weaponSlot.add(uziGroup);
    this.weaponMeshes.push(uziGroup);

    // 3: M4 Rifle
    const m4Group = new THREE.Group();
    const mBody = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.16, 0.65), darkMat);
    const mBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.4, 8), darkMat);
    mBarrel.rotateX(Math.PI / 2);
    mBarrel.position.set(0, 0.02, 0.45);
    const mMag = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.3, 0.14), darkMat);
    mMag.position.set(0, -0.18, 0.1);
    mMag.rotation.x = 0.2;
    const mStock = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.18, 0.3), darkMat);
    mStock.position.set(0, -0.04, -0.38);
    m4Group.add(mBody, mBarrel, mMag, mStock);
    this.weaponSlot.add(m4Group);
    this.weaponMeshes.push(m4Group);

    // 4: Shotgun
    const sgGroup = new THREE.Group();
    const sgBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.8, 8), darkMat);
    sgBarrel.rotateX(Math.PI / 2);
    sgBarrel.position.set(0, 0.04, 0.3);
    const sgPump = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.25), woodMat);
    sgPump.position.set(0, 0, 0.25);
    const sgStock = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.16, 0.45), woodMat);
    sgStock.position.set(0, -0.05, -0.3);
    sgGroup.add(sgBarrel, sgPump, sgStock);
    this.weaponSlot.add(sgGroup);
    this.weaponMeshes.push(sgGroup);

    // 5: RPG
    const rpgGroup = new THREE.Group();
    const rpgTube = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.1, 10), darkMat);
    rpgTube.rotateX(Math.PI / 2);
    const rpgHead = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.4, 8), woodMat);
    rpgHead.rotateX(-Math.PI / 2);
    rpgHead.position.set(0, 0, 0.65);
    rpgGroup.add(rpgTube, rpgHead);
    this.weaponSlot.add(rpgGroup);
    this.weaponMeshes.push(rpgGroup);

    this.setHeldWeapon(3); // Start with M4 visible
  }

  buildFirstPersonRig() {
    this.fpWeaponRig = new THREE.Group();
    // Attached directly to camera
    this.camera.add(this.fpWeaponRig);
    this.scene.add(this.camera);

    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a1a24, metalness: 0.8, roughness: 0.3 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x6e3d1b, roughness: 0.7 });
    const sleeveMat = new THREE.MeshStandardMaterial({ color: 0x00c4cc, roughness: 0.7 });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xe0ac69, roughness: 0.7 });

    this.fpWeapons = [];

    // Helper: Build FP Arm holding weapon
    const createFpArm = () => {
      const armGroup = new THREE.Group();
      // Sleeve
      const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.35, 8), sleeveMat);
      sleeve.position.set(0.12, -0.16, 0.12);
      sleeve.rotation.x = 0.4;
      // Hand
      const hand = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.08, 0.1), skinMat);
      hand.position.set(0.08, -0.05, -0.05);
      armGroup.add(sleeve, hand);
      return armGroup;
    };

    // 0: Fists
    const fpFists = new THREE.Group();
    const lHand = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.1, 0.12), skinMat);
    lHand.position.set(-0.16, -0.12, -0.28);
    const rHand = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.1, 0.12), skinMat);
    rHand.position.set(0.16, -0.12, -0.28);
    fpFists.add(lHand, rHand);
    this.fpWeaponRig.add(fpFists);
    this.fpWeapons.push(fpFists);

    // 1: 9mm Pistol
    const fpPistol = new THREE.Group();
    const pBarrel = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.09, 0.3), darkMat);
    pBarrel.position.set(0, 0, -0.05);
    const pGrip = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.14, 0.08), woodMat);
    pGrip.position.set(0, -0.09, 0.06);
    pGrip.rotation.x = -0.25;
    fpPistol.add(pBarrel, pGrip, createFpArm());
    this.fpWeaponRig.add(fpPistol);
    this.fpWeapons.push(fpPistol);

    // 2: Uzi SMG
    const fpUzi = new THREE.Group();
    const uBody = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.12, 0.38), darkMat);
    const uMag = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.22, 0.06), darkMat);
    uMag.position.set(0, -0.12, 0);
    fpUzi.add(uBody, uMag, createFpArm());
    this.fpWeaponRig.add(fpUzi);
    this.fpWeapons.push(fpUzi);

    // 3: M4 Rifle
    const fpM4 = new THREE.Group();
    const mBody = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.12, 0.52), darkMat);
    const mBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.35, 8), darkMat);
    mBarrel.rotateX(Math.PI / 2);
    mBarrel.position.set(0, 0.02, -0.4);
    const mMag = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.24, 0.1), darkMat);
    mMag.position.set(0, -0.14, 0.08);
    mMag.rotation.x = 0.2;
    // Optical Sight on top
    const mSight = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.04, 0.15), darkMat);
    mSight.position.set(0, 0.08, -0.05);
    fpM4.add(mBody, mBarrel, mMag, mSight, createFpArm());
    this.fpWeaponRig.add(fpM4);
    this.fpWeapons.push(fpM4);

    // 4: Shotgun
    const fpSg = new THREE.Group();
    const sgBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.65, 8), darkMat);
    sgBarrel.rotateX(Math.PI / 2);
    sgBarrel.position.set(0, 0.02, -0.22);
    const sgPump = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.2), woodMat);
    sgPump.position.set(0, 0, -0.15);
    fpSg.add(sgBarrel, sgPump, createFpArm());
    this.fpWeaponRig.add(fpSg);
    this.fpWeapons.push(fpSg);

    // 5: RPG
    const fpRpg = new THREE.Group();
    const rpgTube = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.9, 10), darkMat);
    rpgTube.rotateX(Math.PI / 2);
    rpgTube.position.set(0, 0, 0.1);
    const rpgCone = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.32, 8), woodMat);
    rpgCone.rotateX(-Math.PI / 2);
    rpgCone.position.set(0, 0, -0.45);
    fpRpg.add(rpgTube, rpgCone, createFpArm());
    this.fpWeaponRig.add(fpRpg);
    this.fpWeapons.push(fpRpg);

    // Default rest position in lower-right
    this.fpRestPos = new THREE.Vector3(0.22, -0.2, -0.42);
    this.fpAimPos = new THREE.Vector3(0.0, -0.13, -0.32);
    this.fpWeaponRig.position.copy(this.fpRestPos);

    this.setHeldWeapon(3);
  }

  toggleCameraMode() {
    if (this.cameraMode === 'FIRST_PERSON') {
      this.cameraMode = 'THIRD_PERSON';
    } else if (this.cameraMode === 'THIRD_PERSON') {
      this.cameraMode = 'THIRD_SHOULDER';
    } else {
      this.cameraMode = 'FIRST_PERSON';
    }
    return this.cameraMode;
  }

  triggerRecoil() {
    this.recoilZ = 0.07;
    this.recoilRotX = 0.14;
  }

  setHeldWeapon(index) {
    if (this.weaponMeshes) {
      this.weaponMeshes.forEach((mesh, idx) => {
        mesh.visible = idx === index;
      });
    }
    if (this.fpWeapons) {
      this.fpWeapons.forEach((mesh, idx) => {
        mesh.visible = idx === index;
      });
    }
  }

  setupMouseLook() {
    this.isPointerLocked = false;
    this.isMouseDown = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;

    document.addEventListener('pointerlockchange', () => {
      this.isPointerLocked = document.pointerLockElement === this.domElement;
    });

    // Pointer lock movement
    document.addEventListener('mousemove', (e) => {
      let dx = 0;
      let dy = 0;

      if (this.isPointerLocked) {
        dx = e.movementX;
        dy = e.movementY;
      } else if (this.isMouseDown) {
        // Fallback: mouse drag rotating camera if pointer lock wasn't accepted
        dx = e.clientX - this.lastMouseX;
        dy = e.clientY - this.lastMouseY;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
      }

      if (dx !== 0 || dy !== 0) {
        const sens = 0.0024;
        this.cameraYaw -= dx * sens;
        this.cameraPitch -= dy * sens;

        // Vertical pitch clamp (-80 deg to +80 deg)
        this.cameraPitch = Math.max(-1.42, Math.min(1.42, this.cameraPitch));
      }
    });

    this.domElement.addEventListener('mousedown', (e) => {
      this.isMouseDown = true;
      this.lastMouseX = e.clientX;
      this.lastMouseY = e.clientY;
      if (!this.isPointerLocked) {
        this.requestLock();
      }
    });

    window.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });
  }

  requestLock() {
    try {
      this.domElement.requestPointerLock();
    } catch (e) {}
  }

  startCarjacking(vehicle, onComplete) {
    if (this.isCarjacking || this.inVehicle) return;

    this.isCarjacking = true;
    this.carjackingTimer = 0;
    this.carjackingVehicle = vehicle;
    this.carjackSound1 = false;
    this.carjackSound2 = false;
    this.onCarjackComplete = onComplete;
    this.velocity.set(0, 0, 0);

    // Position Tommy at driver door
    const doorOffset = new THREE.Vector3(-1.7, 0, -0.2).applyAxisAngle(new THREE.Vector3(0, 1, 0), vehicle.mesh.rotation.y);
    this.mesh.position.copy(vehicle.mesh.position).add(doorOffset);
    this.mesh.position.y = 0;
    this.mesh.rotation.y = vehicle.mesh.rotation.y + Math.PI / 2; // Face driver door

    // Ensure 3rd person visibility during cinematic carjacking
    this.torso.visible = true;
    this.head.visible = true;
    this.leftArm.visible = true;
    this.rightArm.visible = true;
    this.leftLeg.visible = true;
    this.rightLeg.visible = true;
    if (this.fpWeaponRig) this.fpWeaponRig.visible = false;

    // Create 3D Driver NPC being removed from car
    const isPolice = vehicle.type === 'police';
    const shirtColor = isPolice ? 0x1f3b5c : 0xff3b30;
    const pantsColor = isPolice ? 0x0f1c2e : 0x223366;
    const shirtMat = new THREE.MeshStandardMaterial({ color: shirtColor });
    const pantsMat = new THREE.MeshStandardMaterial({ color: pantsColor });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xd4a373 });

    const driverGroup = new THREE.Group();
    const dTorso = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.7, 0.3), shirtMat);
    dTorso.position.y = 1.1;
    const dHead = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), skinMat);
    dHead.position.y = 1.6;
    const dLArm = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.6, 0.16), shirtMat);
    dLArm.position.set(-0.35, 1.1, 0);
    const dRArm = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.6, 0.16), shirtMat);
    dRArm.position.set(0.35, 1.1, 0);
    const dLLeg = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.75, 0.2), pantsMat);
    dLLeg.position.set(-0.15, 0.4, 0);
    const dRLeg = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.75, 0.2), pantsMat);
    dRLeg.position.set(0.15, 0.4, 0);

    driverGroup.add(dTorso, dHead, dLArm, dRArm, dLLeg, dRLeg);

    // Initial position inside the driver's seat
    const seatOffset = new THREE.Vector3(-0.4, 0.2, -0.1).applyAxisAngle(new THREE.Vector3(0, 1, 0), vehicle.mesh.rotation.y);
    driverGroup.position.copy(vehicle.mesh.position).add(seatOffset);
    driverGroup.rotation.y = vehicle.mesh.rotation.y;

    this.scene.add(driverGroup);
    this.ejectedDriver = driverGroup;
  }

  enterVehicle(vehicle) {
    this.inVehicle = true;
    this.currentVehicle = vehicle;
    vehicle.isPlayerOccupied = true;
    this.mesh.visible = false;
    soundEngine.startEngineSound();
    soundEngine.startRadio();

    // If entering a usual/civilian car, ensure no siren is active!
    if (vehicle.type !== 'police') {
      vehicle.sirenActive = false;
      soundEngine.stopPoliceSiren();
    }
  }

  exitVehicle() {
    if (!this.inVehicle || !this.currentVehicle) return;
    this.inVehicle = false;
    this.currentVehicle.isPlayerOccupied = false;
    
    // Shut down siren if exiting police cruiser
    if (this.currentVehicle.type === 'police') {
      this.currentVehicle.sirenActive = false;
      if (this.currentVehicle.sirenLight) this.currentVehicle.sirenLight.intensity = 0;
      soundEngine.stopPoliceSiren();
    }

    // Position Tommy safely beside driver door
    const exitOffset = new THREE.Vector3(-2.2, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.currentVehicle.mesh.rotation.y);
    this.mesh.position.copy(this.currentVehicle.mesh.position).add(exitOffset);
    this.mesh.position.y = 0;
    this.velocity.set(0, 0, 0);
    this.mesh.visible = true;

    soundEngine.stopEngineSound();
    soundEngine.stopRadio();
    this.currentVehicle = null;
  }

  takeDamage(amount) {
    if (this.isDead) return;
    if (this.armor > 0) {
      const armorDmg = Math.min(this.armor, amount * 0.7);
      this.armor -= armorDmg;
      amount -= armorDmg;
    }
    this.health = Math.max(0, this.health - amount);
    soundEngine.playHitSound(true);

    if (this.health <= 0) {
      this.die();
    }
  }

  healAndArmor() {
    this.health = 100;
    this.armor = 100;
    soundEngine.playMoney();
  }

  die() {
    this.isDead = true;
    if (this.inVehicle) {
      this.exitVehicle();
    }
    this.mesh.rotation.x = -Math.PI / 2;
    this.mesh.position.y = 0.2;

    setTimeout(() => {
      // Respawn at Ocean View Hotel
      this.health = 100;
      this.armor = 50;
      this.isDead = false;
      this.mesh.rotation.x = 0;
      this.mesh.position.set(60, 0, -50);
      this.velocity.set(0, 0, 0);
    }, 3500);
  }

  update(delta, inputs, colliders) {
    if (this.inVehicle) {
      // In-vehicle camera tracking
      this.updateVehicleCamera(delta);
      return;
    }

    // --- CARJACKING ANIMATION SEQUENCE ---
    if (this.isCarjacking) {
      this.carjackingTimer += delta;
      const veh = this.carjackingVehicle;

      // Position camera cinematically behind Tommy
      const camOffset = new THREE.Vector3(-3.5, 2.2, 1.8).applyAxisAngle(new THREE.Vector3(0, 1, 0), veh.mesh.rotation.y);
      this.camera.position.lerp(veh.mesh.position.clone().add(camOffset), delta * 8);
      this.camera.lookAt(veh.mesh.position.clone().add(new THREE.Vector3(0, 1.1, 0)));

      if (this.carjackingTimer < 0.4) {
        // Phase 1: Reach for door handle
        this.leftArm.rotation.x = -Math.PI / 2.2;
        this.leftArm.rotation.z = 0.3;
      } else if (this.carjackingTimer < 0.8) {
        // Phase 2: Grab driver by the collar!
        this.rightArm.rotation.x = -Math.PI / 2;
        this.rightArm.rotation.z = -0.4;
        if (!this.carjackSound1) {
          this.carjackSound1 = true;
          soundEngine.playShoot('fist');
        }
      } else if (this.carjackingTimer < 1.25) {
        // Phase 3: Yank driver OUT onto the street!
        this.rightArm.rotation.x = 0.3;
        if (!this.carjackSound2) {
          this.carjackSound2 = true;
          soundEngine.playHitSound(true);
        }
        if (this.ejectedDriver) {
          const streetPos = veh.mesh.position.clone().add(new THREE.Vector3(-2.2, 0.2, 0.6).applyAxisAngle(new THREE.Vector3(0, 1, 0), veh.mesh.rotation.y));
          this.ejectedDriver.position.lerp(streetPos, delta * 10);
          this.ejectedDriver.rotation.x = THREE.MathUtils.lerp(this.ejectedDriver.rotation.x, -Math.PI / 2, delta * 12);
          this.ejectedDriver.rotation.z = THREE.MathUtils.lerp(this.ejectedDriver.rotation.z, 0.8, delta * 10);
        }
      } else if (this.carjackingTimer < 1.55) {
        // Phase 4: Tommy slides into driver's seat
        const seatPos = veh.mesh.position.clone().add(new THREE.Vector3(-0.4, 0.2, -0.1).applyAxisAngle(new THREE.Vector3(0, 1, 0), veh.mesh.rotation.y));
        this.mesh.position.lerp(seatPos, delta * 10);
      } else {
        // Phase 5: Complete!
        this.isCarjacking = false;
        this.enterVehicle(veh);
        if (this.onCarjackComplete) {
          this.onCarjackComplete();
        }
        // Fleeing driver gets up and runs away
        if (this.ejectedDriver) {
          const fleeingDriver = this.ejectedDriver;
          let fleeElapsed = 0;
          const fleeInterval = setInterval(() => {
            fleeElapsed += 0.05;
            if (fleeingDriver && fleeingDriver.parent) {
              fleeingDriver.rotation.x = 0;
              fleeingDriver.rotation.z = 0;
              const fleeDir = new THREE.Vector3(-1, 0, -1).normalize().applyAxisAngle(new THREE.Vector3(0, 1, 0), veh.mesh.rotation.y);
              fleeingDriver.position.addScaledVector(fleeDir, 0.35);
            }
            if (fleeElapsed > 5.0) {
              clearInterval(fleeInterval);
              if (fleeingDriver && fleeingDriver.parent) {
                this.scene.remove(fleeingDriver);
              }
            }
          }, 50);
          this.ejectedDriver = null;
        }
      }
      return; // Freeze normal locomotion during carjack sequence
    }

    if (this.isDead) return;

    const { forward, backward, left, right, sprint, jump, aiming } = inputs;
    this.isAiming = aiming;
    this.isSprinting = sprint && forward && !aiming;

    // Movement Direction relative to camera yaw
    const moveDir = new THREE.Vector3();
    if (forward) moveDir.z -= 1;
    if (backward) moveDir.z += 1;
    if (left) moveDir.x -= 1;
    if (right) moveDir.x += 1;

    const isMoving = moveDir.lengthSq() > 0;
    if (isMoving) {
      moveDir.normalize();
      moveDir.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.cameraYaw);

      const targetSpeed = this.isSprinting ? this.sprintSpeed : this.walkSpeed;
      this.velocity.x = moveDir.x * targetSpeed;
      this.velocity.z = moveDir.z * targetSpeed;

      // Character mesh faces movement direction (or camera direction if aiming)
      const targetHeading = this.isAiming ? this.cameraYaw : Math.atan2(moveDir.x, moveDir.z);
      this.mesh.rotation.y = targetHeading;
    } else {
      this.velocity.x *= 0.75;
      this.velocity.z *= 0.75;
      if (this.isAiming) {
        this.mesh.rotation.y = this.cameraYaw;
      }
    }

    // Jump & Gravity
    if (jump && this.isGrounded) {
      this.velocity.y = this.jumpForce;
      this.isGrounded = false;
    }

    this.velocity.y -= this.gravity * delta;

    // Proposed new position
    const nextPos = this.mesh.position.clone();
    nextPos.x += this.velocity.x * delta;
    nextPos.z += this.velocity.z * delta;
    nextPos.y += this.velocity.y * delta;

    // Ground check
    if (nextPos.y <= 0) {
      nextPos.y = 0;
      this.velocity.y = 0;
      this.isGrounded = true;
    }

    // World Collisions with buildings & props
    this.box.setFromCenterAndSize(
      new THREE.Vector3(nextPos.x, nextPos.y + 1.0, nextPos.z),
      new THREE.Vector3(0.8, 1.9, 0.8)
    );

    let collided = false;
    if (colliders) {
      for (let i = 0; i < colliders.length; i++) {
        if (this.box.intersectsBox(colliders[i].box)) {
          collided = true;
          break;
        }
      }
    }

    if (!collided) {
      this.mesh.position.copy(nextPos);
    } else {
      // Revert horizontal movement on collision
      this.mesh.position.y = nextPos.y;
    }

    // Locomotion swing animations
    if (isMoving && this.isGrounded) {
      this.animTime += delta * (this.isSprinting ? 14 : 9);
      const swing = Math.sin(this.animTime);
      this.leftArm.rotation.x = swing * 0.8;
      this.rightArm.rotation.x = this.isAiming ? -Math.PI / 2 : -swing * 0.8;
      this.leftLeg.rotation.x = -swing * 0.9;
      this.rightLeg.rotation.x = swing * 0.9;
    } else {
      // Idle stance
      this.leftArm.rotation.x *= 0.8;
      this.rightArm.rotation.x = this.isAiming ? -Math.PI / 2 : this.rightArm.rotation.x * 0.8;
      this.leftLeg.rotation.x *= 0.8;
      this.rightLeg.rotation.x *= 0.8;
    }

    if (this.isAiming) {
      this.rightArm.rotation.x = -Math.PI / 2 + this.cameraPitch * 0.6;
      this.leftArm.rotation.x = -Math.PI / 2.8;
    }

    // Update On-Foot Third Person Camera
    this.updateFootCamera(delta);
  }

  updateFootCamera(delta) {
    if (this.cameraMode === 'FIRST_PERSON') {
      // --- FIRST PERSON POV MODE ---
      // Hide 3rd person body to avoid camera clipping
      this.torso.visible = false;
      this.head.visible = false;
      this.leftArm.visible = false;
      this.rightArm.visible = false;
      this.leftLeg.visible = false;
      this.rightLeg.visible = false;

      // Show First-Person Viewmodel
      this.fpWeaponRig.visible = true;

      // Camera placed exactly at Tommy's eye level
      this.camera.position.set(this.mesh.position.x, this.mesh.position.y + 1.72, this.mesh.position.z);
      this.camera.rotation.order = 'YXZ';
      this.camera.rotation.y = this.cameraYaw;
      this.camera.rotation.x = this.cameraPitch;
      this.camera.rotation.z = 0;

      // Tommy's character orientation immediately tracks camera yaw
      this.mesh.rotation.y = this.cameraYaw;

      // Precision Aim Down Sights (ADS)
      const targetPos = this.isAiming ? this.fpAimPos : this.fpRestPos;
      const targetFov = this.isAiming ? this.aimFov : this.defaultFov;
      this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, targetFov, delta * 14);
      this.camera.updateProjectionMatrix();

      // Weapon walking bobbing
      const isMoving = Math.abs(this.velocity.x) > 0.5 || Math.abs(this.velocity.z) > 0.5;
      let bobX = 0;
      let bobY = 0;
      if (isMoving && this.isGrounded && !this.isAiming) {
        this.fpBobTimer += delta * (this.isSprinting ? 14 : 9);
        bobX = Math.sin(this.fpBobTimer) * 0.007;
        bobY = Math.abs(Math.cos(this.fpBobTimer)) * 0.005;
      }

      // Smooth recoil recovery
      this.recoilZ = THREE.MathUtils.lerp(this.recoilZ, 0, delta * 12);
      this.recoilRotX = THREE.MathUtils.lerp(this.recoilRotX, 0, delta * 12);

      this.fpWeaponRig.position.x = THREE.MathUtils.lerp(this.fpWeaponRig.position.x, targetPos.x + bobX, delta * 16);
      this.fpWeaponRig.position.y = THREE.MathUtils.lerp(this.fpWeaponRig.position.y, targetPos.y + bobY, delta * 16);
      this.fpWeaponRig.position.z = THREE.MathUtils.lerp(this.fpWeaponRig.position.z, targetPos.z + this.recoilZ, delta * 16);
      this.fpWeaponRig.rotation.x = this.recoilRotX;
    } else {
      // --- THIRD PERSON MODES ---
      this.torso.visible = true;
      this.head.visible = true;
      this.leftArm.visible = true;
      this.rightArm.visible = true;
      this.leftLeg.visible = true;
      this.rightLeg.visible = true;

      // Hide First-Person Viewmodel
      this.fpWeaponRig.visible = false;

      // Restore default FOV
      this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, this.defaultFov, delta * 12);
      this.camera.updateProjectionMatrix();

      const isShoulder = this.cameraMode === 'THIRD_SHOULDER';
      const target = this.mesh.position.clone().add(new THREE.Vector3(0, 1.6, 0));
      const dist = isShoulder ? 2.0 : (this.isAiming ? 2.6 : this.cameraDistance);
      const aimOffset = isShoulder || this.isAiming ? 0.65 : 0.0;

      const camX = target.x + Math.sin(this.cameraYaw) * Math.cos(this.cameraPitch) * dist + Math.cos(this.cameraYaw) * aimOffset;
      const camY = target.y + Math.sin(this.cameraPitch) * dist + (this.isAiming || isShoulder ? 0.2 : 0.6);
      const camZ = target.z + Math.cos(this.cameraYaw) * Math.cos(this.cameraPitch) * dist - Math.sin(this.cameraYaw) * aimOffset;

      const desiredCamPos = new THREE.Vector3(camX, Math.max(0.4, camY), camZ);

      this.camera.position.lerp(desiredCamPos, 0.22);
      this.camera.lookAt(target.clone().add(new THREE.Vector3(
        aimOffset ? Math.cos(this.cameraYaw) * 0.4 : 0,
        0.1,
        aimOffset ? -Math.sin(this.cameraYaw) * 0.4 : 0
      )));
    }
  }

  updateVehicleCamera(delta) {
    const veh = this.currentVehicle;
    if (!veh) return;

    if (this.cameraMode === 'FIRST_PERSON') {
      // First Person Dashboard / Hood Camera
      const hoodOffset = new THREE.Vector3(0, 1.4, -0.6).applyAxisAngle(new THREE.Vector3(0, 1, 0), veh.mesh.rotation.y);
      const camPos = veh.mesh.position.clone().add(hoodOffset);
      this.camera.position.lerp(camPos, 0.35);

      const fwd = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), veh.mesh.rotation.y);
      this.camera.lookAt(camPos.clone().addScaledVector(fwd, 15));
    } else {
      // Third Person Chase Camera behind vehicle
      const rearVec = new THREE.Vector3(0, 0, 1).applyAxisAngle(new THREE.Vector3(0, 1, 0), veh.mesh.rotation.y);
      const camTarget = veh.mesh.position.clone().add(new THREE.Vector3(0, 1.2, 0));

      const chaseDist = this.cameraMode === 'THIRD_SHOULDER' ? 5.2 : 7.5;
      const chaseHeight = 2.8;
      const desiredPos = camTarget.clone().addScaledVector(rearVec, chaseDist).add(new THREE.Vector3(0, chaseHeight, 0));

      this.camera.position.lerp(desiredPos, 0.16);
      this.camera.lookAt(camTarget);
    }
  }

  getFireOrigin() {
    // Both 1st and 3rd person rays align with camera for 100% accurate crosshair shooting
    return this.camera.position.clone().add(this.camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(0.4));
  }

  getFireDirection() {
    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);
    return dir;
  }
}
