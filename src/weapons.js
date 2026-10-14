import * as THREE from 'three';
import { soundEngine } from './audio.js';

export const WEAPON_DATA = [
  { id: 0, name: "FISTS", type: "melee", damage: 30, fireRate: 0.35, range: 2.5, clip: 0, maxReserve: 0, sound: 'fist' },
  { id: 1, name: "9MM PISTOL", type: "pistol", damage: 40, fireRate: 0.28, range: 80, clip: 17, maxReserve: 150, sound: 'pistol' },
  { id: 2, name: "UZI SMG", type: "smg", damage: 28, fireRate: 0.09, range: 65, clip: 30, maxReserve: 300, sound: 'smg' },
  { id: 3, name: "M4 RIFLE", type: "m4", damage: 52, fireRate: 0.12, range: 140, clip: 30, maxReserve: 240, sound: 'm4' },
  { id: 4, name: "SPAS-12", type: "shotgun", damage: 20, fireRate: 0.75, range: 45, clip: 8, maxReserve: 64, sound: 'shotgun' },
  { id: 5, name: "RPG-7", type: "rpg", damage: 300, fireRate: 1.5, range: 200, clip: 1, maxReserve: 12, sound: 'rpg' }
];

export class WeaponManager {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.weapons = WEAPON_DATA.map(w => ({
      ...w,
      currentClip: w.clip,
      reserveAmmo: w.maxReserve
    }));
    this.currentIndex = 3; // Default to M4 for immediate fun!
    this.lastFireTime = 0;
    this.isReloading = false;

    // Visual FX pools
    this.activeTracers = [];
    this.activeRockets = [];
    this.activeExplosions = [];
    this.impactParticles = [];

    // Muzzle flash light
    this.muzzleLight = new THREE.PointLight(0xffaa22, 0, 15);
    this.scene.add(this.muzzleLight);

    // Shared raycaster
    this.raycaster = new THREE.Raycaster();
  }

  getCurrentWeapon() {
    return this.weapons[this.currentIndex];
  }

  selectWeapon(index) {
    if (index >= 0 && index < this.weapons.length) {
      this.currentIndex = index;
      soundEngine.playReload();
    }
  }

  nextWeapon() {
    this.selectWeapon((this.currentIndex + 1) % this.weapons.length);
  }

  prevWeapon() {
    this.selectWeapon((this.currentIndex - 1 + this.weapons.length) % this.weapons.length);
  }

  reload() {
    const w = this.getCurrentWeapon();
    if (w.type === 'melee' || this.isReloading || w.currentClip === w.clip || w.reserveAmmo <= 0) return;
    
    this.isReloading = true;
    soundEngine.playReload();
    setTimeout(() => {
      const needed = w.clip - w.currentClip;
      const taken = Math.min(needed, w.reserveAmmo);
      w.currentClip += taken;
      w.reserveAmmo -= taken;
      this.isReloading = false;
    }, 1000);
  }

  refillAllAmmo() {
    this.weapons.forEach(w => {
      w.currentClip = w.clip;
      w.reserveAmmo = w.maxReserve;
    });
    soundEngine.playReload();
  }

  fire(origin, direction, targets, onHitCallback) {
    const w = this.getCurrentWeapon();
    const now = performance.now() / 1000;
    if (now - this.lastFireTime < w.fireRate || this.isReloading) return false;

    if (w.type !== 'melee') {
      if (w.currentClip <= 0) {
        this.reload();
        return false;
      }
      w.currentClip--;
    }
    this.lastFireTime = now;

    // Play Sound
    soundEngine.playShoot(w.sound);

    // Muzzle Flash
    this.triggerMuzzleFlash(origin);

    if (w.type === 'rpg') {
      this.spawnRocket(origin, direction, targets, onHitCallback);
      return true;
    }

    if (w.type === 'melee') {
      // Melee Punch
      this.performMelee(origin, direction, targets, onHitCallback);
      return true;
    }

    // Hitscan (Pistol, SMG, M4, Shotgun)
    const pelletCount = w.type === 'shotgun' ? 8 : 1;
    for (let p = 0; p < pelletCount; p++) {
      const spreadDir = direction.clone();
      if (w.type === 'shotgun') {
        spreadDir.x += (Math.random() - 0.5) * 0.08;
        spreadDir.y += (Math.random() - 0.5) * 0.08;
        spreadDir.z += (Math.random() - 0.5) * 0.08;
        spreadDir.normalize();
      } else if (w.type === 'smg') {
        spreadDir.x += (Math.random() - 0.5) * 0.025;
        spreadDir.y += (Math.random() - 0.5) * 0.025;
        spreadDir.z += (Math.random() - 0.5) * 0.025;
        spreadDir.normalize();
      }

      // Cast ray from camera position for 100% accurate crosshair alignment
      const camPos = this.camera.position.clone();
      this.raycaster.set(camPos, spreadDir);
      this.raycaster.far = w.range;

      const hit = this.performRaycast(targets);
      const endPoint = hit ? hit.point : camPos.clone().add(spreadDir.clone().multiplyScalar(w.range));

      // Draw Tracer line starting from gun muzzle to impact point
      this.createTracer(origin, endPoint);

      if (hit) {
        this.spawnImpactParticles(hit.point, hit.isFlesh);
        soundEngine.playHitSound(hit.isFlesh);
        if (onHitCallback) onHitCallback(hit, w.damage);
      }
    }

    return true;
  }

  performMelee(origin, direction, targets, onHitCallback) {
    this.raycaster.set(origin, direction);
    this.raycaster.far = 3.2;
    const hit = this.performRaycast(targets);
    if (hit) {
      soundEngine.playHitSound(true);
      if (onHitCallback) onHitCallback(hit, 45);
    }
  }

  performRaycast(targets) {
    // Check against all target meshes (NPCs, Police, Vehicles, Colliders)
    let closestHit = null;
    let closestDist = Infinity;
    const ray = this.raycaster.ray;

    // 1. Check Civilian NPCs
    if (targets.npcs) {
      targets.npcs.forEach(npc => {
        if (!npc.isDead && npc.mesh) {
          // Precise mesh intersect
          const intersects = this.raycaster.intersectObject(npc.mesh, true);
          if (intersects.length > 0 && intersects[0].distance < closestDist) {
            closestDist = intersects[0].distance;
            closestHit = {
              point: intersects[0].point,
              targetType: 'npc',
              target: npc,
              isFlesh: true
            };
          } else {
            // Generous bounding sphere check for fluid gunplay
            const npcCenter = npc.mesh.position.clone().add(new THREE.Vector3(0, 1.1, 0));
            const sphere = new THREE.Sphere(npcCenter, 0.95);
            const targetPoint = new THREE.Vector3();
            if (ray.intersectSphere(sphere, targetPoint)) {
              const d = ray.origin.distanceTo(targetPoint);
              if (d < closestDist && d <= this.raycaster.far) {
                closestDist = d;
                closestHit = {
                  point: targetPoint,
                  targetType: 'npc',
                  target: npc,
                  isFlesh: true
                };
              }
            }
          }
        }
      });
    }

    // 2. Check Police Officers
    if (targets.police) {
      targets.police.forEach(cop => {
        if (!cop.isDead && cop.mesh) {
          const intersects = this.raycaster.intersectObject(cop.mesh, true);
          if (intersects.length > 0 && intersects[0].distance < closestDist) {
            closestDist = intersects[0].distance;
            closestHit = {
              point: intersects[0].point,
              targetType: 'police',
              target: cop,
              isFlesh: true
            };
          } else {
            // Generous bounding sphere check
            const copCenter = cop.mesh.position.clone().add(new THREE.Vector3(0, 1.1, 0));
            const sphere = new THREE.Sphere(copCenter, 0.95);
            const targetPoint = new THREE.Vector3();
            if (ray.intersectSphere(sphere, targetPoint)) {
              const d = ray.origin.distanceTo(targetPoint);
              if (d < closestDist && d <= this.raycaster.far) {
                closestDist = d;
                closestHit = {
                  point: targetPoint,
                  targetType: 'police',
                  target: cop,
                  isFlesh: true
                };
              }
            }
          }
        }
      });
    }

    // 3. Check Vehicles
    if (targets.vehicles) {
      targets.vehicles.forEach(veh => {
        if (veh.mesh) {
          const intersects = this.raycaster.intersectObject(veh.mesh, true);
          if (intersects.length > 0 && intersects[0].distance < closestDist) {
            closestDist = intersects[0].distance;
            closestHit = {
              point: intersects[0].point,
              targetType: 'vehicle',
              target: veh,
              isFlesh: false
            };
          }
        }
      });
    }

    // 4. Check City Environment Colliders
    if (targets.colliders) {
      targets.colliders.forEach(col => {
        const intersectionPoint = new THREE.Vector3();
        if (ray.intersectBox(col.box, intersectionPoint)) {
          const dist = ray.origin.distanceTo(intersectionPoint);
          if (dist < closestDist) {
            closestDist = dist;
            closestHit = {
              point: intersectionPoint,
              targetType: 'world',
              target: col,
              isFlesh: false
            };
          }
        }
      });
    }

    return closestHit;
  }

  triggerMuzzleFlash(pos) {
    this.muzzleLight.position.copy(pos);
    this.muzzleLight.intensity = 3.5;
    setTimeout(() => {
      this.muzzleLight.intensity = 0;
    }, 50);
  }

  createTracer(start, end) {
    const points = [start, end];
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({
      color: 0xffea00,
      linewidth: 2,
      transparent: true,
      opacity: 0.9
    });
    const line = new THREE.Line(geo, mat);
    this.scene.add(line);
    this.activeTracers.push({ line, life: 0.08 });
  }

  spawnRocket(origin, direction, targets, onHitCallback) {
    const geo = new THREE.CylinderGeometry(0.12, 0.12, 0.9, 8);
    geo.rotateX(Math.PI / 2);
    const mat = new THREE.MeshStandardMaterial({ color: 0x223322, metalness: 0.7 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(origin);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), direction);
    this.scene.add(mesh);

    this.activeRockets.push({
      mesh,
      dir: direction.clone(),
      speed: 55,
      life: 4.0,
      targets,
      onHitCallback
    });
  }

  createExplosion(pos, targets, onHitCallback) {
    soundEngine.playExplosion();

    // Visual expanding fireball
    const geo = new THREE.SphereGeometry(1, 16, 16);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xff5500,
      transparent: true,
      opacity: 0.9
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(pos);
    this.scene.add(mesh);

    const light = new THREE.PointLight(0xff5500, 6, 35);
    light.position.copy(pos);
    this.scene.add(light);

    this.activeExplosions.push({ mesh, light, radius: 1, maxRadius: 9, life: 0.6 });

    // Blast damage & physical knockback
    const blastRadius = 14;
    const blastDamage = 250;

    // Damage NPCs
    if (targets.npcs) {
      targets.npcs.forEach(npc => {
        if (!npc.isDead && npc.mesh) {
          const d = npc.mesh.position.distanceTo(pos);
          if (d < blastRadius) {
            const factor = 1 - (d / blastRadius);
            npc.takeDamage(blastDamage * factor, pos);
          }
        }
      });
    }

    // Damage Police Officers
    if (targets.police) {
      targets.police.forEach(cop => {
        if (!cop.isDead && cop.mesh) {
          const d = cop.mesh.position.distanceTo(pos);
          if (d < blastRadius) {
            const factor = 1 - (d / blastRadius);
            cop.takeDamage(blastDamage * factor);
          }
        }
      });
    }

    // Damage & launch vehicles
    if (targets.vehicles) {
      targets.vehicles.forEach(veh => {
        if (veh.mesh) {
          const d = veh.mesh.position.distanceTo(pos);
          if (d < blastRadius) {
            veh.takeDamage(blastDamage * (1 - d / blastRadius));
            // Impulse
            const imp = veh.mesh.position.clone().sub(pos).normalize().multiplyScalar(22);
            veh.velocity.add(imp);
            veh.mesh.position.y += 1.5;
          }
        }
      });
    }
  }

  spawnImpactParticles(pos, isFlesh = false) {
    const count = isFlesh ? 8 : 12;
    const color = isFlesh ? 0xcc0000 : 0xffcc33;
    const pGeo = new THREE.SphereGeometry(0.06, 4, 4);
    const pMat = new THREE.MeshBasicMaterial({ color });

    for (let i = 0; i < count; i++) {
      const pMesh = new THREE.Mesh(pGeo, pMat);
      pMesh.position.copy(pos);
      this.scene.add(pMesh);

      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        Math.random() * 5 + 2,
        (Math.random() - 0.5) * 6
      );
      this.impactParticles.push({ mesh: pMesh, vel, life: 0.35 });
    }
  }

  update(delta) {
    // 1. Update bullet tracers
    for (let i = this.activeTracers.length - 1; i >= 0; i--) {
      const tr = this.activeTracers[i];
      tr.life -= delta;
      if (tr.life <= 0) {
        this.scene.remove(tr.line);
        tr.line.geometry.dispose();
        tr.line.material.dispose();
        this.activeTracers.splice(i, 1);
      }
    }

    // 2. Update Rockets
    for (let i = this.activeRockets.length - 1; i >= 0; i--) {
      const r = this.activeRockets[i];
      const move = r.dir.clone().multiplyScalar(r.speed * delta);
      r.mesh.position.add(move);
      r.life -= delta;

      // Check collision
      this.raycaster.set(r.mesh.position, r.dir);
      this.raycaster.far = move.length() + 0.5;
      const hit = this.performRaycast(r.targets);

      if (hit || r.mesh.position.y <= 0.2 || r.life <= 0) {
        const boomPos = hit ? hit.point : r.mesh.position.clone();
        this.createExplosion(boomPos, r.targets, r.onHitCallback);
        this.scene.remove(r.mesh);
        r.mesh.geometry.dispose();
        r.mesh.material.dispose();
        this.activeRockets.splice(i, 1);
      }
    }

    // 3. Update Explosions
    for (let i = this.activeExplosions.length - 1; i >= 0; i--) {
      const exp = this.activeExplosions[i];
      exp.life -= delta;
      const progress = 1 - (exp.life / 0.6);
      exp.radius = 1 + (exp.maxRadius - 1) * Math.sin(progress * Math.PI * 0.5);
      exp.mesh.scale.set(exp.radius, exp.radius, exp.radius);
      exp.mesh.material.opacity = exp.life / 0.6;
      exp.light.intensity = 6 * (exp.life / 0.6);

      if (exp.life <= 0) {
        this.scene.remove(exp.mesh);
        this.scene.remove(exp.light);
        exp.mesh.geometry.dispose();
        exp.mesh.material.dispose();
        this.activeExplosions.splice(i, 1);
      }
    }

    // 4. Update impact particles
    for (let i = this.impactParticles.length - 1; i >= 0; i--) {
      const p = this.impactParticles[i];
      p.vel.y -= 15 * delta; // Gravity
      p.mesh.position.addScaledVector(p.vel, delta);
      p.life -= delta;

      if (p.life <= 0 || p.mesh.position.y < 0) {
        this.scene.remove(p.mesh);
        p.mesh.geometry.dispose();
        p.mesh.material.dispose();
        this.impactParticles.splice(i, 1);
      }
    }
  }
}
