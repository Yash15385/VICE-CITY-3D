import * as THREE from 'three';

// Procedural Canvas Texture Generator for Vice City 80s Aesthetics
export class TextureFactory {
  static createRoadTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Dark asphalt with subtle noise
    ctx.fillStyle = '#22232a';
    ctx.fillRect(0, 0, 512, 512);

    // Subtle grain
    for (let i = 0; i < 2000; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.04)';
      ctx.fillRect(Math.random() * 512, Math.random() * 512, 2, 2);
    }

    // Double yellow center line
    ctx.fillStyle = '#ffbe0b';
    ctx.fillRect(250, 0, 4, 512);
    ctx.fillRect(258, 0, 4, 512);

    // Dashed white lane dividers
    ctx.fillStyle = '#ffffff';
    ctx.setLineDash([28, 28]);
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'rgba(255,255,255,0.7)';
    ctx.beginPath();
    ctx.moveTo(128, 0);
    ctx.lineTo(128, 512);
    ctx.moveTo(384, 0);
    ctx.lineTo(384, 512);
    ctx.stroke();

    // Side curbs / white edge lines
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fillRect(10, 0, 4, 512);
    ctx.fillRect(498, 0, 4, 512);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  static createSidewalkTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Concrete slabs with pinkish Miami tint
    ctx.fillStyle = '#b0b2be';
    ctx.fillRect(0, 0, 256, 256);

    // Slab grid lines
    ctx.strokeStyle = '#858794';
    ctx.lineWidth = 3;
    ctx.strokeRect(4, 4, 124, 124);
    ctx.strokeRect(128, 4, 124, 124);
    ctx.strokeRect(4, 128, 124, 124);
    ctx.strokeRect(128, 128, 124, 124);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  static createSandTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Golden Miami beach sand
    ctx.fillStyle = '#f4d06f';
    ctx.fillRect(0, 0, 256, 256);

    for (let i = 0; i < 3000; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.06)' : 'rgba(212, 163, 89, 0.12)';
      ctx.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  static createBuildingTexture(type = 0) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // 80s Art Deco Pastel Palettes
    const palettes = [
      { wall: '#fcd5ce', trim: '#ff2a85', win: '#112233', winLit: '#ffbe0b' }, // Pastel Pink Hotel
      { wall: '#cbf3f0', trim: '#00f0ff', win: '#0d1b2a', winLit: '#00f0ff' }, // Ocean Aqua Hotel
      { wall: '#ffe5ec', trim: '#962eff', win: '#161a1d', winLit: '#ff0055' }, // Neon Violet Motel
      { wall: '#1b263b', trim: '#e0e1dd', win: '#0d1b2a', winLit: '#ffea00' }  // Downtown Highrise
    ];
    const p = palettes[type % palettes.length];

    ctx.fillStyle = p.wall;
    ctx.fillRect(0, 0, 512, 512);

    // Decorative Art Deco vertical strips
    ctx.fillStyle = p.trim;
    ctx.fillRect(0, 0, 20, 512);
    ctx.fillRect(492, 0, 20, 512);
    ctx.fillRect(246, 0, 20, 512);

    // Grid of illuminated & dark windows
    const rows = 8;
    const cols = 6;
    const winW = 40;
    const winH = 34;
    const gapX = 40;
    const gapY = 30;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = 35 + c * (winW + gapX);
        const y = 30 + r * (winH + gapY);

        // Window frame
        ctx.fillStyle = '#222';
        ctx.fillRect(x - 2, y - 2, winW + 4, winH + 4);

        // Window glass (randomly lit for realistic city life)
        const isLit = Math.random() > 0.45;
        ctx.fillStyle = isLit ? p.winLit : p.win;
        ctx.fillRect(x, y, winW, winH);

        if (isLit) {
          ctx.fillStyle = 'rgba(255,255,255,0.4)';
          ctx.fillRect(x + 2, y + 2, winW / 2, winH / 2);
        }
      }
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }

  static createNeonSignTexture(text, color = '#ff2a85', subText = '') {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    // Dark backing plate
    ctx.fillStyle = '#0a0a10';
    ctx.fillRect(0, 0, 512, 128);

    ctx.lineWidth = 6;
    ctx.strokeStyle = color;
    ctx.strokeRect(6, 6, 500, 116);

    // Neon Glow Text
    ctx.font = '900 48px "Impact", "Arial Black", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Outer glow
    ctx.shadowColor = color;
    ctx.shadowBlur = 24;
    ctx.fillStyle = color;
    ctx.fillText(text, 256, subText ? 52 : 64);

    // Inner bright core
    ctx.shadowBlur = 4;
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text, 256, subText ? 52 : 64);

    if (subText) {
      ctx.font = '700 20px "Arial", sans-serif';
      ctx.shadowBlur = 12;
      ctx.fillStyle = '#00f0ff';
      ctx.fillText(subText, 256, 96);
    }

    return new THREE.CanvasTexture(canvas);
  }

  static createPoliceCarTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // VCPD Classic White & Green livery
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 512, 256);

    // Green stripe
    ctx.fillStyle = '#0a5c36';
    ctx.fillRect(0, 80, 512, 60);

    // Star & Badge
    ctx.fillStyle = '#ffbe0b';
    ctx.beginPath();
    ctx.arc(256, 110, 20, 0, Math.PI * 2);
    ctx.fill();

    // POLICE text
    ctx.font = '900 36px "Arial Black", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText('POLICE', 160, 122);
    ctx.fillText('V.C.P.D.', 360, 122);

    return new THREE.CanvasTexture(canvas);
  }
}
