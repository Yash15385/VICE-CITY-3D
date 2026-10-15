// UI, Circular Radar Minimap, and Full World Map Manager

export class UIManager {
  constructor() {
    // HUD Elements
    this.healthBar = document.getElementById('hud-health');
    this.armorBar = document.getElementById('hud-armor');
    this.moneyText = document.getElementById('hud-money');
    this.starsContainer = document.getElementById('hud-stars');
    this.weaponName = document.getElementById('hud-weapon-name');
    this.ammoClip = document.getElementById('hud-ammo-clip');
    this.ammoReserve = document.getElementById('hud-ammo-reserve');
    this.zoneText = document.getElementById('hud-zone');
    this.vehicleHud = document.getElementById('vehicle-hud');
    this.carName = document.getElementById('hud-car-name');
    this.speedText = document.getElementById('hud-speed');
    this.radioText = document.getElementById('hud-radio');
    this.prompt = document.getElementById('interaction-prompt');
    this.announcement = document.getElementById('announcement');
    this.hitmarker = document.getElementById('hitmarker');

    // Minimap Canvas
    this.radarCanvas = document.getElementById('radar-canvas');
    this.radarCtx = this.radarCanvas.getContext('2d');

    // Full Map Modal & Canvas
    this.mapModal = document.getElementById('map-modal');
    this.mapCloseBtn = document.getElementById('map-close-btn');
    this.fullMapCanvas = document.getElementById('full-map-canvas');
    this.fullMapCtx = this.fullMapCanvas.getContext('2d');
    this.isMapOpen = false;

    // GPS Waypoint
    this.waypoint = null;

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.mapCloseBtn.addEventListener('click', () => {
      this.toggleMap(false);
    });

    // Click on full map canvas to place/remove GPS waypoint
    this.fullMapCanvas.addEventListener('click', (e) => {
      const rect = this.fullMapCanvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Convert canvas pixel to world coordinates
      // World: X: [-240, 200], Z: [-260, 260]
      const scaleX = 440 / this.fullMapCanvas.width;
      const scaleZ = 520 / this.fullMapCanvas.height;

      const worldX = (clickX * scaleX) - 240;
      const worldZ = (clickY * scaleZ) - 260;

      this.waypoint = { x: worldX, z: worldZ };
      this.showAnnouncement("GPS WAYPOINT SET");
    });
  }

  toggleMap(force = null) {
    this.isMapOpen = force !== null ? force : !this.isMapOpen;
    if (this.isMapOpen) {
      this.mapModal.classList.add('open');
      if (document.exitPointerLock) document.exitPointerLock();
    } else {
      this.mapModal.classList.remove('open');
    }
  }

  showAnnouncement(text, duration = 3000) {
    this.announcement.innerText = text;
    this.announcement.classList.add('show');
    clearTimeout(this.announceTimer);
    this.announceTimer = setTimeout(() => {
      this.announcement.classList.remove('show');
    }, duration);
  }

  showHitmarker() {
    this.hitmarker.classList.add('active');
    setTimeout(() => {
      this.hitmarker.classList.remove('active');
    }, 120);
  }

  setPrompt(text) {
    if (text) {
      this.prompt.innerHTML = text;
      this.prompt.style.display = 'block';
    } else {
      this.prompt.style.display = 'none';
    }
  }

  updateHUD(player, weaponMgr, policeSystem) {
    // Health & Armor
    this.healthBar.style.width = `${Math.max(0, player.health)}%`;
    this.armorBar.style.width = `${Math.max(0, player.armor)}%`;

    // Money format $0000000
    this.moneyText.innerText = `$${player.money.toString().padStart(7, '0')}`;

    // Wanted Stars
    const stars = this.starsContainer.children;
    for (let i = 0; i < 5; i++) {
      if (i < policeSystem.wantedStars) {
        stars[i].classList.add('active');
      } else {
        stars[i].classList.remove('active');
      }
    }

    // Weapons
    const currentW = weaponMgr.getCurrentWeapon();
    this.weaponName.innerText = currentW.name;
    if (currentW.type === 'melee') {
      this.ammoClip.innerText = '∞';
      this.ammoReserve.innerText = '∞';
    } else {
      this.ammoClip.innerText = currentW.currentClip;
      this.ammoReserve.innerText = currentW.reserveAmmo;
    }

    // Vehicle HUD
    if (player.inVehicle && player.currentVehicle) {
      this.vehicleHud.style.display = 'flex';
      const veh = player.currentVehicle;
      const typeNames = {
        sports: 'INFERNUS TURBO',
        muscle: 'VOODOO CUSTOM',
        police: 'V.C.P.D. ENFORCER',
        taxi: 'VICE CAB CO.'
      };
      this.carName.innerText = typeNames[veh.type] || 'AUTOMOBILE';
      const mph = Math.abs(Math.round(veh.speed * 2.3));
      this.speedText.innerText = mph;
    } else {
      this.vehicleHud.style.display = 'none';
    }

    // Zone detection based on X coordinate
    if (player.mesh.position.x > 30) {
      this.zoneText.innerText = 'OCEAN BEACH BOULEVARD';
    } else if (player.mesh.position.x < -100) {
      this.zoneText.innerText = 'DOWNTOWN FINANCIAL DISTRICT';
    } else {
      this.zoneText.innerText = 'MIDTOWN COMMERCIAL';
    }
  }

  // --- CIRCULAR RADAR MINIMAP ---
  drawRadar(player, city, vehicles, npcs, policeSystem) {
    const ctx = this.radarCtx;
    const w = this.radarCanvas.width;
    const h = this.radarCanvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const radius = w / 2 - 4;

    ctx.clearRect(0, 0, w, h);

    // Save clip region to circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.clip();

    // Radar Dark Base Background
    ctx.fillStyle = '#0a101d';
    ctx.fillRect(0, 0, w, h);

    // Coordinate transformation: center radar on player position, rotate so player heading is UP
    const pPos = player.inVehicle && player.currentVehicle ? player.currentVehicle.mesh.position : player.mesh.position;
    const pHeading = player.inVehicle && player.currentVehicle ? player.currentVehicle.mesh.rotation.y : player.cameraYaw;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(pHeading);
    const radarScale = 0.95; // 1 meter = 0.95 pixels

    // 1. Draw Ocean & Beach
    // Ocean is at X > 100
    const oceanScreenX = (100 - pPos.x) * radarScale;
    ctx.fillStyle = '#005f73';
    ctx.fillRect(oceanScreenX, -300, 400, 600);

    // Sand strip [60 to 100]
    const sandScreenX = (60 - pPos.x) * radarScale;
    ctx.fillStyle = '#d4a373';
    ctx.fillRect(sandScreenX, -300, (40) * radarScale, 600);

    // 2. Draw Roads (Grey strips matching squared perimeter road)
    ctx.fillStyle = '#2b2d42';
    // Vertical Avenues (spanning exactly from North Street Z = -208 to South Street Z = 208)
    [-180, -60, 60].forEach(rx => {
      const x = (rx - 8 - pPos.x) * radarScale;
      const y = (-208 - pPos.z) * radarScale;
      ctx.fillRect(x, y, 16 * radarScale, 416 * radarScale);
    });

    // Horizontal Streets (spanning exactly from West Avenue X = -188 to East Avenue X = 68)
    [-200, -100, 0, 100, 200].forEach(rz => {
      const x = (-188 - pPos.x) * radarScale;
      const y = (rz - 8 - pPos.z) * radarScale;
      ctx.fillRect(x, y, 256 * radarScale, 16 * radarScale);
    });

    // 3. Draw Building footprints
    ctx.fillStyle = '#161a1d';
    city.colliders.forEach(col => {
      if (col.type === 'building') {
        const min = col.box.min;
        const max = col.box.max;
        const bx = (min.x - pPos.x) * radarScale;
        const bz = (min.z - pPos.z) * radarScale;
        const bw = (max.x - min.x) * radarScale;
        const bd = (max.z - min.z) * radarScale;
        ctx.fillRect(bx, bz, bw, bd);
      }
    });

    // 4. Draw Interactive Location Icons
    city.interactivityZones.forEach(zone => {
      const zx = (zone.position.x - pPos.x) * radarScale;
      const zz = (zone.position.z - pPos.z) * radarScale;

      ctx.save();
      ctx.translate(zx, zz);
      if (zone.type === 'pay_n_spray') {
        ctx.fillStyle = '#4dfc54'; // Green Wrench/Spray
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI * 2);
        ctx.fill();
      } else if (zone.type === 'ammunation') {
        ctx.fillStyle = '#ff0055'; // Pink Gun
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });

    // 5. Draw NPC Blips (Tiny white dots)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    npcs.forEach(npc => {
      if (!npc.isDead) {
        const nx = (npc.mesh.position.x - pPos.x) * radarScale;
        const nz = (npc.mesh.position.z - pPos.z) * radarScale;
        ctx.fillRect(nx - 1.5, nz - 1.5, 3, 3);
      }
    });

    // 6. Draw Vehicle Blips
    vehicles.forEach(veh => {
      if (veh !== player.currentVehicle && !veh.isWrecked) {
        const vx = (veh.mesh.position.x - pPos.x) * radarScale;
        const vz = (veh.mesh.position.z - pPos.z) * radarScale;

        if (veh.type === 'police') {
          // Flashing Police Cruiser Blip (Alternating Red/Blue)
          const flash = Math.floor(Date.now() / 200) % 2 === 0;
          ctx.fillStyle = flash ? '#ff0044' : '#00f0ff';
          ctx.beginPath();
          ctx.arc(vx, vz, 4.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = '#ffbe0b'; // Yellow Civilian Car
          ctx.fillRect(vx - 2.5, vz - 2.5, 5, 5);
        }
      }
    });

    // 7. Draw GPS Waypoint marker if active
    if (this.waypoint) {
      const wx = (this.waypoint.x - pPos.x) * radarScale;
      const wz = (this.waypoint.z - pPos.z) * radarScale;
      ctx.fillStyle = '#ff00ff';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(wx, wz, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    ctx.restore(); // Restore radar translation/rotation

    // 8. Player Center Marker (Cyan Arrow pointing UP)
    ctx.fillStyle = '#00f0ff';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx, cy - 8);
    ctx.lineTo(cx + 6, cy + 7);
    ctx.lineTo(cx, cy + 4);
    ctx.lineTo(cx - 6, cy + 7);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.restore(); // Restore circle clip
  }

  // --- FULL INTERACTIVE WORLD MAP ---
  drawFullMap(player, city, vehicles, policeSystem) {
    if (!this.isMapOpen) return;

    const ctx = this.fullMapCtx;
    const w = this.fullMapCanvas.width;
    const h = this.fullMapCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // Map Background (Ocean)
    ctx.fillStyle = '#003049';
    ctx.fillRect(0, 0, w, h);

    // Convert World coordinates to Canvas pixels
    // World bounds: X from -240 to 200 (width 440), Z from -260 to 260 (depth 520)
    const mapScaleX = w / 440;
    const mapScaleZ = h / 520;
    const toCanvasX = (worldX) => (worldX + 240) * mapScaleX;
    const toCanvasZ = (worldZ) => (worldZ + 260) * mapScaleZ;

    // 1. Mainland Island Body
    ctx.fillStyle = '#1d3557';
    ctx.beginPath();
    ctx.roundRect(toCanvasX(-220), toCanvasZ(-240), 280 * mapScaleX, 480 * mapScaleZ, 20);
    ctx.fill();

    // 2. Ocean Beach Sand strip
    ctx.fillStyle = '#e9c46a';
    ctx.fillRect(toCanvasX(60), toCanvasZ(-240), 40 * mapScaleX, 480 * mapScaleZ);

    // 3. Roads (clean squared perimeter boulevard)
    ctx.fillStyle = '#3d405b';
    [-180, -60, 60].forEach(rx => {
      ctx.fillRect(toCanvasX(rx - 8), toCanvasZ(-208), 16 * mapScaleX, 416 * mapScaleZ);
    });
    [-200, -100, 0, 100, 200].forEach(rz => {
      ctx.fillRect(toCanvasX(-188), toCanvasZ(rz - 8), 256 * mapScaleX, 16 * mapScaleZ);
    });

    // Outer perimeter curb outline
    ctx.strokeStyle = '#5a5d7a';
    ctx.lineWidth = 2;
    ctx.strokeRect(toCanvasX(-188), toCanvasZ(-208), 256 * mapScaleX, 416 * mapScaleZ);

    // 4. District Labels
    ctx.font = '900 16px "Orbitron", sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.textAlign = 'center';
    ctx.fillText("OCEAN BEACH", toCanvasX(75), toCanvasZ(0));
    ctx.fillText("MIDTOWN COMMERCIAL", toCanvasX(0), toCanvasZ(-50));
    ctx.fillText("DOWNTOWN FINANCIAL", toCanvasX(-120), toCanvasZ(-100));
    ctx.fillText("MARINA & PORT", toCanvasX(-120), toCanvasZ(100));

    // 5. Buildings
    ctx.fillStyle = '#111827';
    city.colliders.forEach(col => {
      if (col.type === 'building') {
        const min = col.box.min;
        const max = col.box.max;
        const bx = toCanvasX(min.x);
        const bz = toCanvasZ(min.z);
        const bw = (max.x - min.x) * mapScaleX;
        const bd = (max.z - min.z) * mapScaleZ;
        ctx.fillRect(bx, bz, bw, bd);
      }
    });

    // 6. Interactive Locations & Landmarks
    city.interactivityZones.forEach(zone => {
      const zx = toCanvasX(zone.position.x);
      const zz = toCanvasZ(zone.position.z);

      ctx.save();
      ctx.translate(zx, zz);
      if (zone.type === 'pay_n_spray') {
        ctx.fillStyle = '#4dfc54';
        ctx.beginPath();
        ctx.arc(0, 0, 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = '700 11px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText("Pay 'n' Spray", 0, -12);
      } else if (zone.type === 'ammunation') {
        ctx.fillStyle = '#962eff';
        ctx.beginPath();
        ctx.arc(0, 0, 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.font = '700 11px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText("Ammu-Nation", 0, -12);
      }
      ctx.restore();
    });

    // 7. Police HQ Icon
    ctx.fillStyle = '#00f0ff';
    ctx.beginPath();
    ctx.arc(toCanvasX(-120), toCanvasZ(0), 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = '700 11px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText("Police HQ", toCanvasX(-120), toCanvasZ(0) - 12);

    // 8. Vehicles
    vehicles.forEach(veh => {
      if (!veh.isWrecked) {
        const vx = toCanvasX(veh.mesh.position.x);
        const vz = toCanvasZ(veh.mesh.position.z);
        if (veh.type === 'police') {
          ctx.fillStyle = '#ff0055';
          ctx.beginPath();
          ctx.arc(vx, vz, 6, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = '#ffbe0b';
          ctx.fillRect(vx - 3, vz - 3, 6, 6);
        }
      }
    });

    // 9. Waypoint
    if (this.waypoint) {
      const wx = toCanvasX(this.waypoint.x);
      const wz = toCanvasZ(this.waypoint.z);
      ctx.fillStyle = '#ff00ff';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(wx, wz, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    // 10. Player Position & Orientation
    const pPos = player.inVehicle && player.currentVehicle ? player.currentVehicle.mesh.position : player.mesh.position;
    const px = toCanvasX(pPos.x);
    const pz = toCanvasZ(pPos.z);
    const pAngle = player.inVehicle && player.currentVehicle ? player.currentVehicle.mesh.rotation.y : player.cameraYaw;

    ctx.save();
    ctx.translate(px, pz);
    ctx.rotate(pAngle);
    ctx.fillStyle = '#00f0ff';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -12);
    ctx.lineTo(8, 10);
    ctx.lineTo(0, 6);
    ctx.lineTo(-8, 10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
}
