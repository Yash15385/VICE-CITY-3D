import * as THREE from 'three';
import { TextureFactory } from './textures.js';
import { TrafficSystem } from './traffic.js';

export class City {
  constructor(scene) {
    this.scene = scene;
    this.colliders = []; // Bounding boxes for collision
    this.roadNetwork = []; // Road segments for traffic and GPS
    this.pedestrianPaths = []; // Sidewalk nodes for NPCs
    this.interactivityZones = []; // Ammu-Nation, Pay 'n' Spray, Safehouse
    this.lampLights = [];
    this.palmTrees = [];
    this.oceanWater = null;

    this.initMaterials();
    this.buildGroundAndOcean();
    this.buildRoadsAndSidewalks();
    this.traffic = new TrafficSystem(this.scene);
    this.buildBuildings();
    this.buildStreetProps();
    this.buildInteractiveLocations();
  }

  initMaterials() {
    this.roadTex = TextureFactory.createRoadTexture();
    this.roadTex.repeat.set(1, 10);
    this.roadMat = new THREE.MeshStandardMaterial({
      map: this.roadTex,
      roughness: 0.8,
      metalness: 0.1
    });

    this.sidewalkTex = TextureFactory.createSidewalkTexture();
    this.sidewalkTex.repeat.set(4, 20);
    this.sidewalkMat = new THREE.MeshStandardMaterial({
      map: this.sidewalkTex,
      roughness: 0.9
    });

    this.sandTex = TextureFactory.createSandTexture();
    this.sandTex.repeat.set(20, 20);
    this.sandMat = new THREE.MeshStandardMaterial({
      map: this.sandTex,
      roughness: 0.95
    });

    this.grassMat = new THREE.MeshStandardMaterial({
      color: 0x3d783d,
      roughness: 0.85
    });

    // Ocean material
    this.oceanMat = new THREE.MeshStandardMaterial({
      color: 0x00a8cc,
      roughness: 0.1,
      metalness: 0.3,
      transparent: true,
      opacity: 0.85
    });
  }

  buildGroundAndOcean() {
    // Main city island base
    const islandGeo = new THREE.PlaneGeometry(600, 600);
    const islandMesh = new THREE.Mesh(islandGeo, this.grassMat);
    islandMesh.rotation.x = -Math.PI / 2;
    islandMesh.position.set(-50, -0.1, 0);
    islandMesh.receiveShadow = true;
    this.scene.add(islandMesh);

    // Ocean Beach Sand strip (East side)
    const beachGeo = new THREE.PlaneGeometry(100, 600);
    const beachMesh = new THREE.Mesh(beachGeo, this.sandMat);
    beachMesh.rotation.x = -Math.PI / 2;
    beachMesh.position.set(150, 0, 0);
    beachMesh.receiveShadow = true;
    this.scene.add(beachMesh);

    // Turquoise Ocean Water
    const oceanGeo = new THREE.PlaneGeometry(800, 800, 64, 64);
    this.oceanWater = new THREE.Mesh(oceanGeo, this.oceanMat);
    this.oceanWater.rotation.x = -Math.PI / 2;
    this.oceanWater.position.set(500, -1.2, 0);
    this.scene.add(this.oceanWater);
  }

  buildRoadsAndSidewalks() {
    // Grid Road Layout:
    // Vertical Avenues: X = -180 (Downtown West), X = -60 (Midtown Central), X = 60 (Ocean Drive East)
    // Horizontal Cross Streets: Z = -200 (North Border), Z = -100, Z = 0, Z = 100, Z = 200 (South Border)
    // The map is bounded by a closed squared perimeter ring road with no blank dead-ends.
    const avenueX = [-180, -60, 60];
    const streetZ = [-200, -100, 0, 100, 200];
    const roadWidth = 16;
    const sidewalkWidth = 4;

    // Squared Perimeter Extents:
    // West outer road edge: X = -180 - 8 = -188
    // East outer road edge: X = 60 + 8 = 68
    // Total street span = 68 - (-188) = 256m (centered at X = -60)
    // North outer road edge: Z = -200 - 8 = -208
    // South outer road edge: Z = 200 + 8 = 208
    // Total avenue span = 208 - (-208) = 416m (centered at Z = 0)
    const avenueLength = 416;
    const streetLength = 256;

    // 1. Long Vertical Avenues (spans exactly from North Street to South Street)
    avenueX.forEach(x => {
      const roadGeo = new THREE.PlaneGeometry(roadWidth, avenueLength);
      const road = new THREE.Mesh(roadGeo, this.roadMat);
      road.rotation.x = -Math.PI / 2;
      road.position.set(x, 0.05, 0);
      road.receiveShadow = true;
      this.scene.add(road);

      // Flanking Sidewalks
      [-1, 1].forEach(side => {
        const swGeo = new THREE.PlaneGeometry(sidewalkWidth, avenueLength);
        const sw = new THREE.Mesh(swGeo, this.sidewalkMat);
        sw.rotation.x = -Math.PI / 2;
        sw.position.set(x + side * (roadWidth / 2 + sidewalkWidth / 2), 0.12, 0);
        sw.receiveShadow = true;
        this.scene.add(sw);

        for (let z = -190; z <= 190; z += 38) {
          this.pedestrianPaths.push(new THREE.Vector3(x + side * (roadWidth / 2 + sidewalkWidth / 2), 0.5, z));
        }
      });

      // Traffic Lane definitions
      this.roadNetwork.push({
        start: new THREE.Vector3(x - 4, 0, 196),
        end: new THREE.Vector3(x - 4, 0, -196),
        dir: new THREE.Vector3(0, 0, -1),
        type: 'avenue'
      });
      this.roadNetwork.push({
        start: new THREE.Vector3(x + 4, 0, -196),
        end: new THREE.Vector3(x + 4, 0, 196),
        dir: new THREE.Vector3(0, 0, 1),
        type: 'avenue'
      });
    });

    // 2. Horizontal Cross Streets (spans exactly from West Avenue to East Avenue)
    streetZ.forEach(z => {
      const roadGeo = new THREE.PlaneGeometry(streetLength, roadWidth);
      const road = new THREE.Mesh(roadGeo, this.roadMat);
      road.rotation.x = -Math.PI / 2;
      road.position.set(-60, 0.06, z);
      road.receiveShadow = true;
      this.scene.add(road);

      // Sidewalks
      [-1, 1].forEach(side => {
        const swGeo = new THREE.PlaneGeometry(streetLength, sidewalkWidth);
        const sw = new THREE.Mesh(swGeo, this.sidewalkMat);
        sw.rotation.x = -Math.PI / 2;
        sw.position.set(-60, 0.12, z + side * (roadWidth / 2 + sidewalkWidth / 2));
        sw.receiveShadow = true;
        this.scene.add(sw);

        for (let x = -170; x <= 50; x += 36) {
          this.pedestrianPaths.push(new THREE.Vector3(x, 0.5, z + side * (roadWidth / 2 + sidewalkWidth / 2)));
        }
      });

      this.roadNetwork.push({
        start: new THREE.Vector3(-176, 0, z + 4),
        end: new THREE.Vector3(56, 0, z + 4),
        dir: new THREE.Vector3(1, 0, 0),
        type: 'street'
      });
      this.roadNetwork.push({
        start: new THREE.Vector3(56, 0, z - 4),
        end: new THREE.Vector3(-176, 0, z - 4),
        dir: new THREE.Vector3(-1, 0, 0),
        type: 'street'
      });
    });

    // 3. Continuous Outer Perimeter Boulevard Sidewalks & Curbs
    // Encloses the squared perimeter road so there are NO open/blank dead endings.
    const curbMat = new THREE.MeshStandardMaterial({
      color: 0x282c34,
      metalness: 0.6,
      roughness: 0.4
    });

    // Outer Perimeter Sidewalks:
    // North outer sidewalk
    const northSw = new THREE.Mesh(new THREE.PlaneGeometry(264, sidewalkWidth), this.sidewalkMat);
    northSw.rotation.x = -Math.PI / 2;
    northSw.position.set(-60, 0.12, -210);
    northSw.receiveShadow = true;
    this.scene.add(northSw);

    // South outer sidewalk
    const southSw = new THREE.Mesh(new THREE.PlaneGeometry(264, sidewalkWidth), this.sidewalkMat);
    southSw.rotation.x = -Math.PI / 2;
    southSw.position.set(-60, 0.12, 210);
    southSw.receiveShadow = true;
    this.scene.add(southSw);

    // West outer sidewalk
    const westSw = new THREE.Mesh(new THREE.PlaneGeometry(sidewalkWidth, 424), this.sidewalkMat);
    westSw.rotation.x = -Math.PI / 2;
    westSw.position.set(-190, 0.12, 0);
    westSw.receiveShadow = true;
    this.scene.add(westSw);

    // East outer sidewalk
    const eastSw = new THREE.Mesh(new THREE.PlaneGeometry(sidewalkWidth, 424), this.sidewalkMat);
    eastSw.rotation.x = -Math.PI / 2;
    eastSw.position.set(70, 0.12, 0);
    eastSw.receiveShadow = true;
    this.scene.add(eastSw);

    // Raised outer curb borders (smooth granite curb barrier along perimeter)
    const northCurb = new THREE.Mesh(new THREE.BoxGeometry(266, 0.35, 0.45), curbMat);
    northCurb.position.set(-60, 0.18, -212.2);
    northCurb.receiveShadow = true;
    this.scene.add(northCurb);

    const southCurb = new THREE.Mesh(new THREE.BoxGeometry(266, 0.35, 0.45), curbMat);
    southCurb.position.set(-60, 0.18, 212.2);
    southCurb.receiveShadow = true;
    this.scene.add(southCurb);

    const westCurb = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.35, 426), curbMat);
    westCurb.position.set(-192.2, 0.18, 0);
    westCurb.receiveShadow = true;
    this.scene.add(westCurb);

    const eastCurb = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.35, 426), curbMat);
    eastCurb.position.set(72.2, 0.18, 0);
    eastCurb.receiveShadow = true;
    this.scene.add(eastCurb);
  }

  buildBuildings() {
    // City Blocks:
    // Block 1 (Ocean Drive East): X = [80 to 110], Z = [-220 to 220]
    // Block 2 (Central Midtown): X = [-40 to 40], Z = [-180 to -120], [-80 to -20], [20 to 80], [120 to 180]
    // Block 3 (West Downtown Skyscraper & Industrial): X = [-160 to -80]
    
    // 1. Ocean Drive Art Deco Hotels & Strip
    const oceanHotels = [
      { name: "THE MALIBU CLUB", color: "#ff2a85", z: -150, h: 28, style: 0 },
      { name: "OCEAN VIEW HOTEL", color: "#00f0ff", z: -50, h: 32, style: 1 },
      { name: "VERONA HOTEL", color: "#962eff", z: 50, h: 26, style: 2 },
      { name: "COLON HOTEL", color: "#ffbe0b", z: 150, h: 30, style: 0 }
    ];

    oceanHotels.forEach(hotel => {
      this.createBuilding(95, hotel.z, 28, 50, hotel.h, hotel.style, hotel.name, hotel.color);
    });

    // 2. Central Commercial & Residential Strip
    const midtownBlocks = [
      { x: 0, z: -150, w: 60, d: 60, h: 42, style: 1 },
      { x: 0, z: -50, w: 60, d: 60, h: 56, style: 3 },
      { x: 0, z: 50, w: 60, d: 60, h: 48, style: 0 },
      { x: 0, z: 150, w: 60, d: 60, h: 38, style: 2 }
    ];
    midtownBlocks.forEach(b => {
      this.createBuilding(b.x, b.z, b.w, b.d, b.h, b.style);
    });

    // 3. West Downtown District (Tall Skyscrapers & Financial Towers)
    const downtownTowers = [
      { x: -120, z: -150, w: 65, d: 65, h: 88, style: 3, name: "VICE BANK TOWER", color: "#00f0ff" },
      { x: -120, z: -50, w: 60, d: 60, h: 105, style: 3, name: "CORONADO PLAZA", color: "#ff2a85" },
      { x: -120, z: 50, w: 65, d: 65, h: 72, style: 3 },
      { x: -120, z: 150, w: 60, d: 60, h: 62, style: 3 }
    ];
    downtownTowers.forEach(t => {
      this.createBuilding(t.x, t.z, t.w, t.d, t.h, t.style, t.name, t.color);
    });
  }

  createBuilding(x, z, width, depth, height, styleIdx = 0, signText = null, signColor = '#ff2a85') {
    const geo = new THREE.BoxGeometry(width, height, depth);
    const tex = TextureFactory.createBuildingTexture(styleIdx);
    tex.repeat.set(width / 20, height / 15);

    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.7,
      metalness: 0.2
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, height / 2, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.scene.add(mesh);

    // Add rooftop border rim
    const roofRimGeo = new THREE.BoxGeometry(width + 1, 1.5, depth + 1);
    const roofRimMat = new THREE.MeshStandardMaterial({ color: 0x22222a });
    const roofRim = new THREE.Mesh(roofRimGeo, roofRimMat);
    roofRim.position.set(x, height + 0.75, z);
    this.scene.add(roofRim);

    // Neon Signboard if specified
    if (signText) {
      const signTex = TextureFactory.createNeonSignTexture(signText, signColor);
      const signGeo = new THREE.PlaneGeometry(width * 0.7, 8);
      const signMat = new THREE.MeshBasicMaterial({
        map: signTex,
        transparent: true
      });
      const signMesh = new THREE.Mesh(signGeo, signMat);
      signMesh.position.set(x, height * 0.75, z - depth / 2 - 0.2);
      this.scene.add(signMesh);

      // Emissive Point Light for sign glow
      const signLight = new THREE.PointLight(signColor, 1.5, 30);
      signLight.position.set(x, height * 0.75, z - depth / 2 - 2);
      this.scene.add(signLight);
    }

    // Register Box Collider
    const box = new THREE.Box3();
    box.setFromCenterAndSize(
      new THREE.Vector3(x, height / 2, z),
      new THREE.Vector3(width, height, depth)
    );
    this.colliders.push({ box, type: 'building', name: signText || 'Building' });
  }

  // Helper: check if a coordinate lies within a driving road lane or intersection clear zone
  isRoadOrClearZone(x, z, margin = 4.0) {
    const avenueX = [-180, -60, 60];
    const streetZ = [-200, -100, 0, 100, 200];
    const roadHalfWidth = 8.0;

    // Check Avenue corridor
    for (let i = 0; i < avenueX.length; i++) {
      const ax = avenueX[i];
      if (Math.abs(x - ax) < roadHalfWidth + margin && z >= -208 - margin && z <= 208 + margin) {
        return true;
      }
    }

    // Check Cross Street corridor
    for (let j = 0; j < streetZ.length; j++) {
      const sz = streetZ[j];
      if (Math.abs(z - sz) < roadHalfWidth + margin && x >= -188 - margin && x <= 68 + margin) {
        return true;
      }
    }

    return false;
  }

  buildStreetProps() {
    // 1. PALM TREES: Placed exclusively in safe park blocks, courtyards, and beach strips.
    // Absolutely NO trees within 14 meters of any road lane or intersection!
    
    // A. Ocean Drive Beach Strip (completely safe on the sand east of hotels, X >= 120)
    for (let z = -215; z <= 215; z += 24) {
      this.createPalmTree(122, z);
      this.createPalmTree(145, z);
    }

    // B. Ocean Drive Sidewalk Promenade (X = 76, placed strictly mid-block away from cross streets)
    const safeMidblockZ = [
      -165, -150, -135, // between -200 and -100
      -65, -50, -35,    // between -100 and 0
      35, 50, 65,       // between 0 and 100
      135, 150, 165     // between 100 and 200
    ];
    safeMidblockZ.forEach(z => {
      if (!this.isRoadOrClearZone(76, z, 5.0)) {
        this.createPalmTree(76, z);
      }
    });

    // C. Midtown Courtyard Green Plazas (between buildings, X = +/-26)
    [-150, -50, 50, 150].forEach(z => {
      [-26, 26].forEach(x => {
        if (!this.isRoadOrClearZone(x, z, 5.0)) {
          this.createPalmTree(x, z);
        }
      });
    });

    // D. Downtown Tower Plazas (X = -90 and -150)
    [-150, -50, 50, 150].forEach(z => {
      [-90, -150].forEach(x => {
        if (!this.isRoadOrClearZone(x, z, 5.0)) {
          this.createPalmTree(x, z);
        }
      });
    });

    // E. Outer Perimeter Green Park Buffers (well beyond the outer curb)
    [-160, -100, -20, 40].forEach(x => {
      this.createPalmTree(x, -225);
      this.createPalmTree(x, 225);
    });
    [-160, -80, 80, 160].forEach(z => {
      this.createPalmTree(-204, z);
    });

    // 2. STREET LAMPS: Placed along sidewalks at safe mid-block coordinates.
    // Guaranteed never to encroach on road lanes or intersections.
    
    // Along Ocean Drive sidewalk
    safeMidblockZ.forEach(z => {
      if (Math.abs(z % 30) < 10) {
        if (!this.isRoadOrClearZone(71, z, 2.5)) {
          this.createStreetLamp(71, z);
        }
      }
    });

    // Along Midtown & Downtown Avenue sidewalks
    [-170, -50].forEach(x => {
      [-150, -50, 50, 150].forEach(z => {
        if (!this.isRoadOrClearZone(x, z, 2.5)) {
          this.createStreetLamp(x, z);
        }
      });
    });

    // Along Cross Street sidewalks (midway between avenues at X = -120 and X = 0)
    [-200, -100, 0, 100, 200].forEach(sz => {
      [-120, 0].forEach(x => {
        [-10, 10].forEach(offset => {
          const lz = sz + offset;
          if (!this.isRoadOrClearZone(x, lz, 2.0)) {
            this.createStreetLamp(x, lz);
          }
        });
      });
    });
  }

  createPalmTree(x, z) {
    const palmGroup = new THREE.Group();
    palmGroup.position.set(x, 0, z);

    // Curved slender trunk
    const trunkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(Math.random() * 0.6, 6, Math.random() * 0.6),
      new THREE.Vector3(Math.random() * 1.5, 12, Math.random() * 1.2),
      new THREE.Vector3(Math.random() * 2.0, 16, Math.random() * 1.8)
    ]);
    const trunkGeo = new THREE.TubeGeometry(trunkCurve, 16, 0.55, 8, false);
    const trunkMat = new THREE.MeshStandardMaterial({
      color: 0x8b5a2b,
      roughness: 0.9
    });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.castShadow = true;
    palmGroup.add(trunk);

    // Palm Crown & Fronds
    const crownTop = trunkCurve.getPoint(1);
    const frondCount = 9;
    const frondMat = new THREE.MeshStandardMaterial({
      color: 0x2d8a4e,
      roughness: 0.7,
      side: THREE.DoubleSide
    });

    for (let i = 0; i < frondCount; i++) {
      const angle = (i / frondCount) * Math.PI * 2;
      const frondGeo = new THREE.ConeGeometry(1.6, 7, 4);
      frondGeo.translate(0, 3.5, 0);
      frondGeo.rotateX(Math.PI / 2.6);

      const frond = new THREE.Mesh(frondGeo, frondMat);
      frond.position.copy(crownTop);
      frond.rotation.y = angle;
      frond.rotation.z = 0.2;
      palmGroup.add(frond);
    }

    this.scene.add(palmGroup);
    this.palmTrees.push(palmGroup);

    // Collision cylinder for trunk base
    const box = new THREE.Box3();
    box.setFromCenterAndSize(
      new THREE.Vector3(x, 4, z),
      new THREE.Vector3(1.4, 8, 1.4)
    );
    this.colliders.push({ box, type: 'prop', name: 'Palm Tree' });
  }

  createStreetLamp(x, z) {
    const lampGroup = new THREE.Group();
    lampGroup.position.set(x, 0, z);

    // Post
    const poleGeo = new THREE.CylinderGeometry(0.18, 0.24, 9, 8);
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x1a1a24, metalness: 0.8, roughness: 0.3 });
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.y = 4.5;
    lampGroup.add(pole);

    // Curved head
    const armGeo = new THREE.CylinderGeometry(0.14, 0.14, 2.5, 8);
    const arm = new THREE.Mesh(armGeo, poleMat);
    arm.rotation.z = Math.PI / 3;
    arm.position.set(0.9, 8.8, 0);
    lampGroup.add(arm);

    // Glowing Lantern head
    const lanternGeo = new THREE.SphereGeometry(0.45, 8, 8);
    const lanternMat = new THREE.MeshBasicMaterial({ color: 0xffea9f });
    const lantern = new THREE.Mesh(lanternGeo, lanternMat);
    lantern.position.set(1.8, 8.5, 0);
    lampGroup.add(lantern);

    // Warm Point Light casting light on the road
    const light = new THREE.PointLight(0xffea9f, 0.9, 22);
    light.position.set(1.8, 8.2, 0);
    lampGroup.add(light);
    this.lampLights.push(light);

    this.scene.add(lampGroup);

    const box = new THREE.Box3();
    box.setFromCenterAndSize(new THREE.Vector3(x, 4.5, z), new THREE.Vector3(0.8, 9, 0.8));
    this.colliders.push({ box, type: 'prop', name: 'Lamp Post' });
  }

  buildInteractiveLocations() {
    // 1. PAY 'N' SPRAY REPAIR GARAGE (West District, X = -215, Z = 50)
    this.createPayNSpray(-215, 50);

    // 2. AMMU-NATION GUN STORE (West District, X = -215, Z = -50)
    this.createAmmuNation(-215, -50);

    // 3. POLICE HEADQUARTERS (Downtown, X = -120, Z = 0)
    this.createPoliceHQ(-120, 0);
  }

  createPayNSpray(x, z) {
    const geo = new THREE.BoxGeometry(22, 12, 28);
    const mat = new THREE.MeshStandardMaterial({ color: 0x333b48, roughness: 0.6 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, 6, z);
    this.scene.add(mesh);

    // Neon Pay 'n' Spray Sign
    const signTex = TextureFactory.createNeonSignTexture("PAY 'N' SPRAY", "#4dfc54", "REPAIR & RESPRAY");
    const signGeo = new THREE.PlaneGeometry(18, 6);
    const signMat = new THREE.MeshBasicMaterial({ map: signTex, transparent: true });
    const signMesh = new THREE.Mesh(signGeo, signMat);
    signMesh.position.set(x + 11.1, 8, z);
    signMesh.rotation.y = Math.PI / 2;
    this.scene.add(signMesh);

    // Garage Entrance Door Bay (Open hole representation)
    const doorGeo = new THREE.PlaneGeometry(12, 8);
    const doorMat = new THREE.MeshBasicMaterial({ color: 0x050508 });
    const doorMesh = new THREE.Mesh(doorGeo, doorMat);
    doorMesh.position.set(x + 11.05, 4, z);
    doorMesh.rotation.y = Math.PI / 2;
    this.scene.add(doorMesh);

    // Interactive Trigger Zone (Drive into this box)
    const triggerBox = new THREE.Box3();
    triggerBox.setFromCenterAndSize(new THREE.Vector3(x + 5, 3, z), new THREE.Vector3(12, 6, 12));
    this.interactivityZones.push({
      type: 'pay_n_spray',
      box: triggerBox,
      position: new THREE.Vector3(x + 5, 0, z),
      name: "Pay 'n' Spray"
    });

    const box = new THREE.Box3();
    box.setFromCenterAndSize(new THREE.Vector3(x - 3, 6, z), new THREE.Vector3(16, 12, 28));
    this.colliders.push({ box, type: 'building', name: "Pay 'n' Spray" });
  }

  createAmmuNation(x, z) {
    const geo = new THREE.BoxGeometry(22, 12, 28);
    const mat = new THREE.MeshStandardMaterial({ color: 0x4a2828, roughness: 0.7 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, 6, z);
    this.scene.add(mesh);

    const signTex = TextureFactory.createNeonSignTexture("AMMU-NATION", "#ff0055", "WEAPONS & AMMO");
    const signGeo = new THREE.PlaneGeometry(18, 6);
    const signMat = new THREE.MeshBasicMaterial({ map: signTex, transparent: true });
    const signMesh = new THREE.Mesh(signGeo, signMat);
    signMesh.position.set(x + 11.1, 8, z);
    signMesh.rotation.y = Math.PI / 2;
    this.scene.add(signMesh);

    // Weapon Pickup Marker on sidewalk outside Ammu-Nation
    const triggerBox = new THREE.Box3();
    triggerBox.setFromCenterAndSize(new THREE.Vector3(x + 14, 2, z), new THREE.Vector3(6, 4, 6));
    this.interactivityZones.push({
      type: 'ammunation',
      box: triggerBox,
      position: new THREE.Vector3(x + 14, 0.5, z),
      name: "Ammu-Nation"
    });

    // Glowing rotating weapon pickup icon
    const iconGeo = new THREE.OctahedronGeometry(1.2, 0);
    const iconMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true });
    this.ammuIcon = new THREE.Mesh(iconGeo, iconMat);
    this.ammuIcon.position.set(x + 14, 1.8, z);
    this.scene.add(this.ammuIcon);

    const box = new THREE.Box3();
    box.setFromCenterAndSize(new THREE.Vector3(x, 6, z), new THREE.Vector3(22, 12, 28));
    this.colliders.push({ box, type: 'building', name: "Ammu-Nation" });
  }

  createPoliceHQ(x, z) {
    const geo = new THREE.BoxGeometry(45, 24, 45);
    const mat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.6 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, 12, z);
    this.scene.add(mesh);

    const signTex = TextureFactory.createNeonSignTexture("POLICE DEPT", "#00f0ff", "VICE CITY DISTRICT 1");
    const signGeo = new THREE.PlaneGeometry(24, 6);
    const signMat = new THREE.MeshBasicMaterial({ map: signTex, transparent: true });
    const signMesh = new THREE.Mesh(signGeo, signMat);
    signMesh.position.set(x, 16, z + 22.6);
    this.scene.add(signMesh);

    const box = new THREE.Box3();
    box.setFromCenterAndSize(new THREE.Vector3(x, 12, z), new THREE.Vector3(45, 24, 45));
    this.colliders.push({ box, type: 'building', name: "Police Headquarters" });
  }

  update(delta, time) {
    // Update Traffic Lights & Signal cycles
    if (this.traffic) {
      this.traffic.update(delta);
    }

    // Animate gentle ocean wave motion
    if (this.oceanWater) {
      this.oceanWater.position.y = -1.2 + Math.sin(time * 1.5) * 0.15;
    }
    // Animate Ammu-Nation floating icon
    if (this.ammuIcon) {
      this.ammuIcon.rotation.y += delta * 1.8;
      this.ammuIcon.position.y = 1.8 + Math.sin(time * 3) * 0.25;
    }
    // Subtle palm tree wind sway
    this.palmTrees.forEach((tree, idx) => {
      tree.rotation.z = Math.sin(time * 1.8 + idx) * 0.03;
    });
  }
}
