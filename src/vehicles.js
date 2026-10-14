import * as THREE from 'three';
import { soundEngine } from './audio.js';
import { TextureFactory } from './textures.js';

export class Vehicle {
  constructor(scene, type = 'sports', position = new THREE.Vector3(), heading = 0) {
    this.scene = scene;
    this.type = type; // 'sports', 'muscle', 'police', 'taxi'
    this.mesh = new THREE.Group();
    this.mesh.position.copy(position);
    this.mesh.rotation.y = heading;

    // Physics parameters
    this.speed = 0;
    this.maxSpeed = type === 'sports' ? 38 : type === 'police' ? 34 : 28; // units per second
    this.acceleration = type === 'sports' ? 22 : 18;
    this.reverseSpeed = 12;
    this.steeringAngle = 0;
    this.maxSteeringAngle = 0.6; // radians
    this.turnSpeed = 2.4;
    this.friction = 0.985;
    this.brakeForce = 28;
    this.isBraking = false;
    this.isDrifting = false;

    // Health & State
    this.health = 100;
    this.isWrecked = false;
    this.isPlayerOccupied = false;
    this.driver = null; // AI or Player
    this.lightsOn = true;

    // Siren state (for police)
    this.sirenActive = false;
    this.sirenTime = 0;

    // Smoke & fire particles
    this.smokeTimer = 0;

    this.wheelMeshes = [];
    this.frontWheelGroups = [];

    this.buildModel();
    this.scene.add(this.mesh);
  }

  buildModel() {
    const isPolice = this.type === 'police';
    const isSports = this.type === 'sports';
    const isTaxi = this.type === 'taxi';

    // Car Body Color Palette
    let bodyColor = 0xff0055; // Neon Magenta
    if (isSports) bodyColor = 0xff3b30; // Candy Red
    else if (isTaxi) bodyColor = 0xffcc00; // NYC Taxi Yellow
    else if (this.type === 'muscle') bodyColor = 0x00d2ff; // Cyan Blue
    else if (isPolice) bodyColor = 0xffffff;

    // 1. Main Chassis
    const chassisGeo = new THREE.BoxGeometry(2.1, 0.75, 4.4);
    const chassisMat = new THREE.MeshStandardMaterial({
      color: bodyColor,
      metalness: 0.6,
      roughness: 0.25
    });

    if (isPolice) {
      chassisMat.map = TextureFactory.createPoliceCarTexture();
    }

    const chassis = new THREE.Mesh(chassisGeo, chassisMat);
    chassis.position.y = 0.65;
    chassis.castShadow = true;
    chassis.receiveShadow = true;
    this.mesh.add(chassis);

    // 2. Cabin / Roof & Windows
    const cabinGeo = isSports ? new THREE.BoxGeometry(1.8, 0.55, 2.2) : new THREE.BoxGeometry(1.9, 0.65, 2.5);
    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x111e2e,
      metalness: 0.9,
      roughness: 0.1
    });
    const cabin = new THREE.Mesh(cabinGeo, glassMat);
    cabin.position.set(0, 1.25, isSports ? -0.2 : 0);
    cabin.castShadow = true;
    this.mesh.add(cabin);

    // Roof Top
    const roofGeo = new THREE.BoxGeometry(1.78, 0.08, isSports ? 2.1 : 2.4);
    const roof = new THREE.Mesh(roofGeo, chassisMat);
    roof.position.set(0, isSports ? 1.55 : 1.6, isSports ? -0.2 : 0);
    this.mesh.add(roof);

    // 3. Sports Rear Spoiler
    if (isSports) {
      const wingGeo = new THREE.BoxGeometry(2.1, 0.08, 0.4);
      const wing = new THREE.Mesh(wingGeo, chassisMat);
      wing.position.set(0, 1.25, 2.0);
      this.mesh.add(wing);

      [-0.8, 0.8].forEach(sx => {
        const postGeo = new THREE.BoxGeometry(0.08, 0.4, 0.2);
        const post = new THREE.Mesh(postGeo, chassisMat);
        post.position.set(sx, 1.05, 2.0);
        this.mesh.add(post);
      });
    }

    // 4. Police Lightbar
    if (isPolice) {
      const barBaseGeo = new THREE.BoxGeometry(1.4, 0.15, 0.35);
      const barBaseMat = new THREE.MeshStandardMaterial({ color: 0x222222 });
      const barBase = new THREE.Mesh(barBaseGeo, barBaseMat);
      barBase.position.set(0, 1.7, 0);
      this.mesh.add(barBase);

      // Red & Blue Emergency lights
      const redGeo = new THREE.BoxGeometry(0.55, 0.18, 0.3);
      this.redLightMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      this.redMesh = new THREE.Mesh(redGeo, this.redLightMat);
      this.redMesh.position.set(-0.35, 1.72, 0);
      this.mesh.add(this.redMesh);

      const blueGeo = new THREE.BoxGeometry(0.55, 0.18, 0.3);
      this.blueLightMat = new THREE.MeshBasicMaterial({ color: 0x0066ff });
      this.blueMesh = new THREE.Mesh(blueGeo, this.blueLightMat);
      this.blueMesh.position.set(0.35, 1.72, 0);
      this.mesh.add(this.blueMesh);

      this.sirenLight = new THREE.PointLight(0xff0000, 0, 25);
      this.sirenLight.position.set(0, 2.0, 0);
      this.mesh.add(this.sirenLight);
    }

    // 5. Headlights & Taillights
    const headMat = new THREE.MeshBasicMaterial({ color: 0xfffaed });
    [-0.75, 0.75].forEach(hx => {
      const headGeo = new THREE.BoxGeometry(0.35, 0.2, 0.1);
      const head = new THREE.Mesh(headGeo, headMat);
      head.position.set(hx, 0.65, -2.22);
      this.mesh.add(head);
    });

    const tailMat = new THREE.MeshBasicMaterial({ color: 0xff1122 });
    [-0.75, 0.75].forEach(tx => {
      const tailGeo = new THREE.BoxGeometry(0.35, 0.2, 0.1);
      const tail = new THREE.Mesh(tailGeo, tailMat);
      tail.position.set(tx, 0.65, 2.22);
      this.mesh.add(tail);
    });

    // 6. Wheels (4x)
    const wheelPositions = [
      { x: -1.05, z: -1.35, isFront: true },
      { x: 1.05, z: -1.35, isFront: true },
      { x: -1.05, z: 1.35, isFront: false },
      { x: 1.05, z: 1.35, isFront: false }
    ];

    const wheelGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.35, 16);
    wheelGeo.rotateZ(Math.PI / 2);
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8 });
    const rimGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.36, 8);
    rimGeo.rotateZ(Math.PI / 2);
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.9, roughness: 0.2 });

    wheelPositions.forEach(wp => {
      const wheelGroup = new THREE.Group();
      wheelGroup.position.set(wp.x, 0.42, wp.z);

      const tire = new THREE.Mesh(wheelGeo, tireMat);
      tire.castShadow = true;
      const rim = new THREE.Mesh(rimGeo, rimMat);
      tire.add(rim);

      wheelGroup.add(tire);
      this.mesh.add(wheelGroup);

      this.wheelMeshes.push(tire);
      if (wp.isFront) {
        this.frontWheelGroups.push(wheelGroup);
      }
    });

    // Bounding Box for vehicle collision
    this.box = new THREE.Box3();
  }

  updatePhysics(delta, inputs, colliders) {
    if (this.isWrecked) {
      this.speed *= 0.92;
      return;
    }

    const { forward, backward, left, right, handbrake } = inputs;

    // Steering input
    if (left) {
      this.steeringAngle = Math.min(this.steeringAngle + this.turnSpeed * delta, this.maxSteeringAngle);
    } else if (right) {
      this.steeringAngle = Math.max(this.steeringAngle - this.turnSpeed * delta, -this.maxSteeringAngle);
    } else {
      // Return to center
      this.steeringAngle *= 0.78;
    }

    // Front wheels visual steer
    this.frontWheelGroups.forEach(fw => {
      fw.rotation.y = this.steeringAngle;
    });

    // Acceleration & Braking
    this.isBraking = handbrake;
    if (forward) {
      this.speed = Math.min(this.speed + this.acceleration * delta, this.maxSpeed);
    } else if (backward) {
      if (this.speed > 0.5) {
        // Brake
        this.speed = Math.max(0, this.speed - this.brakeForce * delta);
      } else {
        // Reverse
        this.speed = Math.max(this.speed - this.acceleration * 0.6 * delta, -this.reverseSpeed);
      }
    } else {
      // Natural friction
      this.speed *= this.friction;
    }

    if (handbrake) {
      this.speed *= 0.94;
      this.isDrifting = Math.abs(this.speed) > 10;
      if (this.isDrifting && Math.random() > 0.6) {
        soundEngine.playTireSkid();
      }
    } else {
      this.isDrifting = false;
    }

    // Angular yaw rotation based on speed and steering
    if (Math.abs(this.speed) > 0.2) {
      const turnDir = this.speed >= 0 ? 1 : -1;
      const driftFactor = this.isDrifting ? 1.6 : 1.0;
      this.mesh.rotation.y += this.steeringAngle * (this.speed / this.maxSpeed) * this.turnSpeed * driftFactor * delta * turnDir;
    }

    // Linear translation along car's forward vector (-Z)
    const forwardVec = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.mesh.rotation.y);
    const moveDist = this.speed * delta;
    const nextPos = this.mesh.position.clone().addScaledVector(forwardVec, moveDist);

    // Collision check against city colliders
    this.box.setFromCenterAndSize(
      new THREE.Vector3(nextPos.x, nextPos.y + 0.8, nextPos.z),
      new THREE.Vector3(2.2, 1.6, 4.4)
    );

    let collided = false;
    if (colliders) {
      for (let i = 0; i < colliders.length; i++) {
        const c = colliders[i];
        if (this.box.intersectsBox(c.box)) {
          collided = true;
          // Crash impact
          if (Math.abs(this.speed) > 6) {
            soundEngine.playCrash();
            this.takeDamage(Math.abs(this.speed) * 0.8);
          }
          this.speed = -this.speed * 0.35; // Rebound
          break;
        }
      }
    }

    if (!collided) {
      this.mesh.position.copy(nextPos);
    }

    // Spin wheel meshes
    const wheelRot = (moveDist / 0.42);
    this.wheelMeshes.forEach(w => {
      w.rotation.x += wheelRot;
    });

    // Update police lights and siren if police
    if (this.type === 'police' && this.sirenActive) {
      this.sirenTime += delta * 12;
      const isRed = Math.floor(this.sirenTime) % 2 === 0;
      this.redLightMat.color.setHex(isRed ? 0xff0044 : 0x440000);
      this.blueLightMat.color.setHex(isRed ? 0x001155 : 0x00f0ff);
      this.sirenLight.intensity = 3.5;
      this.sirenLight.color.setHex(isRed ? 0xff0000 : 0x0066ff);
    }

    // Engine Audio update for player car
    if (this.isPlayerOccupied) {
      const rpm = Math.abs(this.speed) / this.maxSpeed;
      soundEngine.updateEngine(rpm);
    }
  }

  takeDamage(amount) {
    this.health = Math.max(0, this.health - amount);
    if (this.health <= 0 && !this.isWrecked) {
      this.isWrecked = true;
      soundEngine.playExplosion();
      // Blacken vehicle material
      this.mesh.traverse(child => {
        if (child.isMesh && child.material) {
          child.material.color.setHex(0x1a1a1a);
        }
      });
    }
  }

  repair() {
    this.health = 100;
    this.isWrecked = false;
    // Respray with random vibrant 80s color!
    const colors = [0xff0055, 0x00f0ff, 0xffbe0b, 0x962eff, 0x4dfc54, 0xff3b30];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    this.mesh.traverse(child => {
      if (child.isMesh && child.material && child !== this.redMesh && child !== this.blueMesh) {
        child.material.color.setHex(newColor);
      }
    });
  }

  toggleSiren() {
    if (this.type !== 'police') {
      // Usual cars do NOT have sirens - only horn
      this.sirenActive = false;
      soundEngine.stopPoliceSiren();
      soundEngine.playHorn();
      return;
    }
    this.sirenActive = !this.sirenActive;
    if (this.sirenActive) {
      soundEngine.startPoliceSiren();
    } else {
      soundEngine.stopPoliceSiren();
      if (this.sirenLight) this.sirenLight.intensity = 0;
    }
  }
}

export class VehicleManager {
  constructor(scene, city) {
    this.scene = scene;
    this.city = city;
    this.vehicles = [];
    this.sparks = [];
    this.spawnInitialVehicles();
  }

  spawnInitialVehicles() {
    // Spawn various civilian and sports cars on roads
    const spawns = [
      { type: 'sports', x: 64, z: -80, heading: 0 },
      { type: 'muscle', x: 56, z: 20, heading: Math.PI },
      { type: 'taxi', x: -56, z: -120, heading: Math.PI },
      { type: 'sports', x: -64, z: 80, heading: 0 },
      { type: 'police', x: -115, z: 25, heading: Math.PI / 2 }, // Outside Police HQ
      { type: 'police', x: -115, z: 35, heading: Math.PI / 2 },
      { type: 'muscle', x: -184, z: -60, heading: 0 },
      { type: 'taxi', x: 0, z: -104, heading: -Math.PI / 2 }
    ];

    spawns.forEach(s => {
      const v = new Vehicle(this.scene, s.type, new THREE.Vector3(s.x, 0, s.z), s.heading);
      this.vehicles.push(v);
    });
  }

  spawnPoliceCruiser(position, heading = 0) {
    const cruiser = new Vehicle(this.scene, 'police', position, heading);
    cruiser.sirenActive = true;
    this.vehicles.push(cruiser);
    return cruiser;
  }

  spawnCrashSparks(pos) {
    const count = 16;
    const pGeo = new THREE.SphereGeometry(0.08, 4, 4);
    const pMat = new THREE.MeshBasicMaterial({ color: 0xffaa00 });

    for (let i = 0; i < count; i++) {
      const spark = new THREE.Mesh(pGeo, pMat);
      spark.position.copy(pos);
      this.scene.add(spark);

      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 12,
        Math.random() * 8 + 2,
        (Math.random() - 0.5) * 12
      );
      this.sparks.push({ mesh: spark, vel, life: 0.35 });
    }
  }

  update(delta, playerVehicle, colliders, playerPos, isPlayerOnFoot) {
    // 1. Update active crash spark particles
    for (let s = this.sparks.length - 1; s >= 0; s--) {
      const sp = this.sparks[s];
      sp.vel.y -= 22 * delta; // Gravity
      sp.mesh.position.addScaledVector(sp.vel, delta);
      sp.life -= delta;
      if (sp.life <= 0 || sp.mesh.position.y < 0.1) {
        this.scene.remove(sp.mesh);
        sp.mesh.geometry.dispose();
        sp.mesh.material.dispose();
        this.sparks.splice(s, 1);
      }
    }

    // 2. CAR-TO-CAR CRASH PHYSICS & COLLISIONS
    for (let i = 0; i < this.vehicles.length; i++) {
      for (let j = i + 1; j < this.vehicles.length; j++) {
        const vA = this.vehicles[i];
        const vB = this.vehicles[j];

        if (vA.isWrecked && vB.isWrecked) continue;

        const dist = vA.mesh.position.distanceTo(vB.mesh.position);
        const minDist = 3.2; // Vehicle bounding sphere clearance

        if (dist < minDist && dist > 0.05) {
          // Collision Normal vector
          const normal = vA.mesh.position.clone().sub(vB.mesh.position).setY(0).normalize();
          const overlap = minDist - dist;

          // Push both vehicles away from each other
          vA.mesh.position.addScaledVector(normal, overlap * 0.52);
          vB.mesh.position.addScaledVector(normal, -overlap * 0.52);

          // Calculate impact intensity
          const relSpeed = Math.abs(vA.speed) + Math.abs(vB.speed);

          if (relSpeed > 3.5) {
            soundEngine.playCrash();

            // Deal physical crash damage
            vA.takeDamage(relSpeed * 0.8);
            vB.takeDamage(relSpeed * 0.8);

            // Rebound bounce
            vA.speed = -vA.speed * 0.45;
            vB.speed = -vB.speed * 0.45;

            // Angular spin impulse
            vA.mesh.rotation.y += (Math.random() - 0.5) * 0.35;
            vB.mesh.rotation.y += (Math.random() - 0.5) * 0.35;

            // Spawn collision sparks
            const contactPoint = vA.mesh.position.clone().add(vB.mesh.position).multiplyScalar(0.5);
            contactPoint.y = 0.8;
            this.spawnCrashSparks(contactPoint);
          }
        }
      }
    }

    // 3. AMBIENT CAR TRAFFIC AI & STOPPING FOR PLAYER
    this.vehicles.forEach(veh => {
      if (veh === playerVehicle) return; // Player drives this one

      const inputs = {
        forward: true,
        backward: false,
        left: false,
        right: false,
        handbrake: false
      };

      const forwardVec = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), veh.mesh.rotation.y);
      const rightVec = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), veh.mesh.rotation.y);

      let slowDown = false;

      // A. Check if PLAYER IS STANDING ON THE ROAD in front of the car
      if (isPlayerOnFoot && playerPos) {
        const toPlayer = playerPos.clone().sub(veh.mesh.position);
        const fwdDist = toPlayer.dot(forwardVec);
        const latDist = Math.abs(toPlayer.dot(rightVec));

        // If player is within 15 meters in front of the car and within the driving lane (latDist < 3.2)
        if (fwdDist > 0.5 && fwdDist < 16.0 && latDist < 3.2) {
          slowDown = true;
          inputs.forward = false;
          inputs.handbrake = true;
          veh.speed = Math.max(0, veh.speed - 32 * delta);

          // Honk horn if player blocks the lane
          veh.honkTimer = (veh.honkTimer || 0) + delta;
          if (veh.honkTimer > 2.5) {
            veh.honkTimer = 0;
            soundEngine.playHorn();
          }
        }
      }

      // B. Check if ANOTHER CAR is stopped or driving slowly in front
      this.vehicles.forEach(other => {
        if (other !== veh) {
          const dist = veh.mesh.position.distanceTo(other.mesh.position);
          if (dist < 10) {
            const toOther = other.mesh.position.clone().sub(veh.mesh.position).normalize();
            if (forwardVec.dot(toOther) > 0.6) {
              slowDown = true;
            }
          }
        }
      });

      if (slowDown) {
        inputs.forward = false;
        inputs.handbrake = true;
      }

      veh.updatePhysics(delta, inputs, colliders);

      // Loop cars around if they hit map bounds
      if (veh.mesh.position.z > 240) veh.mesh.position.z = -240;
      if (veh.mesh.position.z < -240) veh.mesh.position.z = 240;
      if (veh.mesh.position.x > 80) veh.mesh.position.x = -190;
      if (veh.mesh.position.x < -195) veh.mesh.position.x = 75;
    });
  }

  getNearestVehicle(pos, maxDist = 5.5) {
    let nearest = null;
    let minDist = maxDist;
    this.vehicles.forEach(veh => {
      if (!veh.isWrecked) {
        const d = veh.mesh.position.distanceTo(pos);
        if (d < minDist) {
          minDist = d;
          nearest = veh;
        }
      }
    });
    return nearest;
  }

  // --- VEHICLE-TO-PEDESTRIAN COLLISION & IMPACT PHYSICS ---
  checkPedestrianCollisions(npcs, policeOfficers, onKillTarget, delta = 0.016, playerVehicle = null) {
    const allVehicles = new Set(this.vehicles);
    if (playerVehicle) allVehicles.add(playerVehicle);

    allVehicles.forEach(veh => {
      if (!veh || !veh.mesh || veh.isWrecked) return;
      const speed = Math.abs(veh.speed);
      if (speed < 0.4) return; // Any moving car physically strikes pedestrians

      const vehPos = veh.mesh.position;
      const theta = veh.mesh.rotation.y;
      const sinA = Math.sin(-theta);
      const cosA = Math.cos(-theta);

      const forwardVec = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), theta);
      const rightVec = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), theta);
      const moveDir = forwardVec.clone().multiplyScalar(veh.speed >= 0 ? 1 : -1);

      // Car local dimensions: width 2.1m (half 1.05m), length 4.4m (half 2.2m)
      const halfW = 1.35; // Car half-width + pedestrian radius
      const halfL = 2.45; // Car half-length + pedestrian radius

      // Dynamic swept collision volume in local Z to prevent high-speed tunneling
      const sweepDist = Math.max(0.9, speed * delta * 2.8);
      const minLocalZ = -(halfL + (veh.speed >= 0 ? sweepDist : 0.6));
      const maxLocalZ = halfL + (veh.speed < 0 ? sweepDist : 0.6);

      const testPedestrian = (target, targetType) => {
        if (!target || target.isDead || !target.mesh) return;

        const targetPos = target.mesh.position;
        const dx = targetPos.x - vehPos.x;
        const dz = targetPos.z - vehPos.z;

        // Broad phase bounding distance
        const maxDist = halfL + sweepDist + 2.0;
        if (dx * dx + dz * dz > maxDist * maxDist) return;

        // Narrow phase: transform target to car's local horizontal coordinates
        const localX = dx * cosA - dz * sinA;
        const localZ = dx * sinA + dz * cosA;

        if (Math.abs(localX) < halfW && localZ >= minLocalZ && localZ <= maxLocalZ) {
          const wasAlive = !target.isDead;

          // 1. Instant fatality damage
          target.takeDamage(999, vehPos);
          if (!target.isDead && target.die) {
            target.die();
          }

          // 2. Visceral ragdoll fling physics
          const flingForce = Math.max(4.5, Math.min(14.0, speed * 0.45));
          target.mesh.position.addScaledVector(moveDir, flingForce);
          if (localX >= 0) {
            target.mesh.position.addScaledVector(rightVec, 1.4);
          } else {
            target.mesh.position.addScaledVector(rightVec, -1.4);
          }
          target.mesh.rotation.x = -Math.PI / 2;
          target.mesh.rotation.y = Math.random() * Math.PI * 2;
          target.mesh.position.y = 0.15;

          // 3. Audio & vehicle impact recoil
          soundEngine.playHitSound(true);
          soundEngine.playCrash();
          veh.speed *= 0.88;

          // 4. Trigger crime / wanted star
          if (wasAlive && onKillTarget) {
            onKillTarget(target, targetType, veh);
          }
        }
      };

      // 1. Check Civilian NPCs
      if (npcs) {
        npcs.forEach(npc => testPedestrian(npc, 'npc'));
      }

      // 2. Check Police Officers on foot
      if (policeOfficers) {
        policeOfficers.forEach(cop => testPedestrian(cop, 'police'));
      }
    });
  }
}
