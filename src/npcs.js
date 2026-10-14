import * as THREE from 'three';
import { soundEngine } from './audio.js';

export class NPC {
  constructor(scene, position, pathNodes = []) {
    this.scene = scene;
    this.pathNodes = pathNodes;
    this.mesh = new THREE.Group();
    this.mesh.position.copy(position);

    this.health = 50;
    this.isDead = false;
    this.state = 'WANDER'; // 'WANDER', 'FLEE', 'COWER', 'DEAD'
    this.walkSpeed = 2.4 + Math.random() * 0.8;
    this.runSpeed = 6.8 + Math.random() * 1.5;
    this.currentSpeed = this.walkSpeed;

    this.targetNode = this.getRandomNode();
    this.heading = Math.random() * Math.PI * 2;
    this.animTime = Math.random() * 10;
    this.fleeTimer = 0;
    this.moneyDropped = false;

    this.buildCharacterMesh();
    this.scene.add(this.mesh);
  }

  buildCharacterMesh() {
    // Random 80s civilian outfits (Tourists, Miami Vice suits, Beachgoers)
    const shirtColors = [0x00f0ff, 0xff2a85, 0xffea00, 0xffffff, 0x4dfc54, 0x962eff];
    const pantsColors = [0x223366, 0xdddddd, 0x333333, 0xd4a373];
    const skinTones = [0xf5d0b5, 0x8d5524, 0xc68642, 0xe0ac69];

    const shirtCol = shirtColors[Math.floor(Math.random() * shirtColors.length)];
    const pantsCol = pantsColors[Math.floor(Math.random() * pantsColors.length)];
    const skinCol = skinTones[Math.floor(Math.random() * skinTones.length)];

    const skinMat = new THREE.MeshStandardMaterial({ color: skinCol, roughness: 0.8 });
    const shirtMat = new THREE.MeshStandardMaterial({ color: shirtCol, roughness: 0.7 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: pantsCol, roughness: 0.7 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5 });

    // Torso
    const torsoGeo = new THREE.BoxGeometry(0.55, 0.75, 0.32);
    this.torso = new THREE.Mesh(torsoGeo, shirtMat);
    this.torso.position.y = 1.25;
    this.torso.castShadow = true;
    this.mesh.add(this.torso);

    // Head
    const headGeo = new THREE.SphereGeometry(0.22, 8, 8);
    this.head = new THREE.Mesh(headGeo, skinMat);
    this.head.position.y = 1.82;
    this.mesh.add(this.head);

    // Hair / Sunglasses
    const hairGeo = new THREE.BoxGeometry(0.35, 0.16, 0.35);
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x221105 });
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.set(0, 1.95, 0);
    this.mesh.add(hair);

    // Limbs (Arms & Legs) for animation
    const limbGeo = new THREE.BoxGeometry(0.18, 0.65, 0.18);

    // Left Arm
    this.leftArm = new THREE.Mesh(limbGeo, shirtMat);
    this.leftArm.position.set(-0.38, 1.2, 0);
    this.mesh.add(this.leftArm);

    // Right Arm
    this.rightArm = new THREE.Mesh(limbGeo, shirtMat);
    this.rightArm.position.set(0.38, 1.2, 0);
    this.mesh.add(this.rightArm);

    // Left Leg
    const legGeo = new THREE.BoxGeometry(0.22, 0.8, 0.22);
    this.leftLeg = new THREE.Mesh(legGeo, pantsMat);
    this.leftLeg.position.set(-0.16, 0.45, 0);
    this.leftLeg.castShadow = true;
    this.mesh.add(this.leftLeg);

    // Right Leg
    this.rightLeg = new THREE.Mesh(legGeo, pantsMat);
    this.rightLeg.position.set(0.16, 0.45, 0);
    this.rightLeg.castShadow = true;
    this.mesh.add(this.rightLeg);
  }

  getRandomNode() {
    if (this.pathNodes.length === 0) {
      return new THREE.Vector3(
        (Math.random() - 0.5) * 150,
        0.5,
        (Math.random() - 0.5) * 200
      );
    }
    return this.pathNodes[Math.floor(Math.random() * this.pathNodes.length)];
  }

  takeDamage(amount, hitSourcePos = null) {
    if (this.isDead) return;
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    } else {
      // Panic and flee!
      this.state = 'FLEE';
      this.fleeTimer = 8.0;
      if (hitSourcePos) {
        // Run away from shooter
        const away = this.mesh.position.clone().sub(hitSourcePos).normalize();
        this.heading = Math.atan2(away.x, away.z);
      }
    }
  }

  die() {
    this.isDead = true;
    this.state = 'DEAD';
    // Fall back to ground
    this.mesh.rotation.x = -Math.PI / 2;
    this.mesh.position.y = 0.2;

    // Blood puddle decal
    const bloodGeo = new THREE.CircleGeometry(0.7, 16);
    bloodGeo.rotateX(-Math.PI / 2);
    const bloodMat = new THREE.MeshBasicMaterial({ color: 0x880011, transparent: true, opacity: 0.85 });
    const blood = new THREE.Mesh(bloodGeo, bloodMat);
    blood.position.set(this.mesh.position.x, 0.02, this.mesh.position.z);
    this.scene.add(blood);

    // Drop Cash Wallet
    this.dropMoney();
  }

  dropMoney() {
    if (this.moneyDropped) return;
    this.moneyDropped = true;

    const walletGeo = new THREE.BoxGeometry(0.4, 0.15, 0.3);
    const walletMat = new THREE.MeshStandardMaterial({
      color: 0x4dfc54,
      emissive: 0x116611,
      roughness: 0.3
    });
    this.walletMesh = new THREE.Mesh(walletGeo, walletMat);
    this.walletMesh.position.set(
      this.mesh.position.x + (Math.random() - 0.5) * 1.2,
      0.2,
      this.mesh.position.z + (Math.random() - 0.5) * 1.2
    );
    this.scene.add(this.walletMesh);
    this.walletValue = Math.floor(Math.random() * 80) + 20;
  }

  alertNearbyGunfire(firePos) {
    if (this.isDead) return;
    const dist = this.mesh.position.distanceTo(firePos);
    if (dist < 28) {
      this.state = 'FLEE';
      this.fleeTimer = 7.0;
      const away = this.mesh.position.clone().sub(firePos).normalize();
      this.heading = Math.atan2(away.x, away.z);
    }
  }

  update(delta, playerPos, isPlayerAimingNear) {
    if (this.isDead) {
      // Wallet bob / spin if exists
      if (this.walletMesh) {
        this.walletMesh.rotation.y += delta * 2.5;
      }
      return;
    }

    this.animTime += delta * (this.state === 'FLEE' ? 14 : 7);

    // AI State Machine
    if (this.state === 'FLEE') {
      this.currentSpeed = this.runSpeed;
      this.fleeTimer -= delta;
      if (this.fleeTimer <= 0) {
        this.state = 'WANDER';
      }
    } else {
      // Check if player is aiming right at this NPC within close range
      if (isPlayerAimingNear && this.mesh.position.distanceTo(playerPos) < 10) {
        this.state = 'COWER';
        this.currentSpeed = 0;
        // Raise hands in terror
        this.leftArm.rotation.x = -Math.PI * 0.8;
        this.rightArm.rotation.x = -Math.PI * 0.8;
      } else {
        this.state = 'WANDER';
        this.currentSpeed = this.walkSpeed;
      }
    }

    if (this.state === 'WANDER') {
      // Navigate towards target sidewalk waypoint
      if (!this.targetNode || this.mesh.position.distanceTo(this.targetNode) < 3.0) {
        this.targetNode = this.getRandomNode();
      }
      const dir = this.targetNode.clone().sub(this.mesh.position);
      dir.y = 0;
      this.heading = Math.atan2(dir.x, dir.z);
    }

    // Move in heading direction
    if (this.currentSpeed > 0) {
      this.mesh.rotation.y = this.heading;
      const forward = new THREE.Vector3(Math.sin(this.heading), 0, Math.cos(this.heading));
      this.mesh.position.addScaledVector(forward, this.currentSpeed * delta);

      // Procedural walking / running animation swing
      const swing = Math.sin(this.animTime);
      this.leftArm.rotation.x = swing * 0.7;
      this.rightArm.rotation.x = -swing * 0.7;
      this.leftLeg.rotation.x = -swing * 0.8;
      this.rightLeg.rotation.x = swing * 0.8;
      this.torso.position.y = 1.25 + Math.abs(Math.sin(this.animTime * 2)) * 0.05;
    }
  }
}

export class NPCManager {
  constructor(scene, city) {
    this.scene = scene;
    this.city = city;
    this.npcs = [];
    this.spawnPedestrians(35);
  }

  spawnPedestrians(count) {
    const nodes = this.city.pedestrianPaths;
    for (let i = 0; i < count; i++) {
      let spawnPos;
      if (nodes.length > 0) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        spawnPos = randomNode.clone().add(new THREE.Vector3(
          (Math.random() - 0.5) * 3,
          0,
          (Math.random() - 0.5) * 3
        ));
      } else {
        spawnPos = new THREE.Vector3((Math.random() - 0.5) * 150, 0.5, (Math.random() - 0.5) * 200);
      }
      const npc = new NPC(this.scene, spawnPos, nodes);
      this.npcs.push(npc);
    }
  }

  notifyGunfire(firePos) {
    this.npcs.forEach(npc => npc.alertNearbyGunfire(firePos));
  }

  update(delta, playerPos, isPlayerAimingNear) {
    this.npcs.forEach(npc => {
      npc.update(delta, playerPos, isPlayerAimingNear);
    });
  }

  collectNearbyWallets(playerPos, radius = 2.5) {
    let earned = 0;
    this.npcs.forEach(npc => {
      if (npc.isDead && npc.walletMesh) {
        if (npc.walletMesh.position.distanceTo(playerPos) < radius) {
          earned += npc.walletValue;
          this.scene.remove(npc.walletMesh);
          npc.walletMesh.geometry.dispose();
          npc.walletMesh.material.dispose();
          npc.walletMesh = null;
          soundEngine.playMoney();
        }
      }
    });
    return earned;
  }
}
