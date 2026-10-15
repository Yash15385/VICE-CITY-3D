import * as THREE from 'three';

export class TrafficSystem {
  constructor(scene) {
    this.scene = scene;

    // Grid coordinates matching City layout:
    this.avenueX = [-180, -60, 60];
    this.streetZ = [-200, -100, 0, 100, 200];

    this.intersections = [];
    this.zebraCrossings = [];
    this.sidewalkNodes = [];
    this.sidewalkGraph = new Map(); // nodeId -> { pos, neighbors: [nodeId] }

    this.initIntersections();
    this.buildZebraCrossings();
    this.buildTrafficLightModels();
    this.buildSidewalkGraph();
  }

  initIntersections() {
    let id = 0;
    this.avenueX.forEach(x => {
      this.streetZ.forEach(z => {
        // Initial phase staggered for realistic progressive traffic grid
        const phaseOffset = (Math.abs(x) * 0.08 + Math.abs(z) * 0.06) % 28;
        this.intersections.push({
          id: id++,
          x,
          z,
          state: 'AVE_GREEN', // 'AVE_GREEN', 'AVE_YELLOW', 'STREET_GREEN', 'STREET_YELLOW'
          timer: phaseOffset,
          durations: {
            AVE_GREEN: 13.0,
            AVE_YELLOW: 3.0,
            STREET_GREEN: 11.0,
            STREET_YELLOW: 3.0
          },
          lightMeshes: [],
          pointLight: null
        });
      });
    });
  }

  // --- ZEBRA CROSSINGS (CROSSWALKS) ---
  buildZebraCrossings() {
    const stripeMat = new THREE.MeshStandardMaterial({
      color: 0xf5f5f5,
      roughness: 0.45,
      metalness: 0.1
    });

    const crosswalkDepth = 3.4;
    const stripeWidth = 0.85;
    const stripeHeight = 0.02;
    const stripeGap = 0.65;
    const roadHalfWidth = 8.0;

    this.intersections.forEach(inter => {
      const { x, z, id } = inter;

      // 4 Crosswalks per intersection:
      // 1. North Crosswalk (across Avenue, East-West stripes) at z - 10
      // 2. South Crosswalk (across Avenue, East-West stripes) at z + 10
      // 3. West Crosswalk (across Street, North-South stripes) at x - 10
      // 4. East Crosswalk (across Street, North-South stripes) at x + 10

      const crosswalkDefs = [];
      if (z > -200) crosswalkDefs.push({ type: 'across_avenue', side: 'north', center: new THREE.Vector3(x, 0.06, z - 10), spanAxis: 'x' });
      if (z < 200) crosswalkDefs.push({ type: 'across_avenue', side: 'south', center: new THREE.Vector3(x, 0.06, z + 10), spanAxis: 'x' });
      if (x > -180) crosswalkDefs.push({ type: 'across_street', side: 'west', center: new THREE.Vector3(x - 10, 0.06, z), spanAxis: 'z' });
      if (x < 60) crosswalkDefs.push({ type: 'across_street', side: 'east', center: new THREE.Vector3(x + 10, 0.06, z), spanAxis: 'z' });

      crosswalkDefs.forEach((cw, idx) => {
        const group = new THREE.Group();
        const numStripes = 8;
        const totalSpan = (numStripes - 1) * (stripeWidth + stripeGap);
        const startOffset = -totalSpan / 2;

        for (let i = 0; i < numStripes; i++) {
          const offset = startOffset + i * (stripeWidth + stripeGap);

          let geo;
          if (cw.spanAxis === 'x') {
            // Stripes run along Z across Avenue
            geo = new THREE.BoxGeometry(stripeWidth, stripeHeight, crosswalkDepth);
            const stripe = new THREE.Mesh(geo, stripeMat);
            stripe.position.set(offset, 0, 0);
            stripe.receiveShadow = true;
            group.add(stripe);
          } else {
            // Stripes run along X across Street
            geo = new THREE.BoxGeometry(crosswalkDepth, stripeHeight, stripeWidth);
            const stripe = new THREE.Mesh(geo, stripeMat);
            stripe.position.set(0, 0, offset);
            stripe.receiveShadow = true;
            group.add(stripe);
          }
        }

        group.position.copy(cw.center);
        this.scene.add(group);

        this.zebraCrossings.push({
          id: `${id}_${cw.side}`,
          intersectionId: id,
          type: cw.type,
          side: cw.side,
          center: cw.center,
          box: new THREE.Box3().setFromCenterAndSize(
            cw.center.clone().setY(1.0),
            cw.spanAxis === 'x' ? new THREE.Vector3(16, 2, 4) : new THREE.Vector3(4, 2, 16)
          )
        });
      });
    });
  }

  // --- 3D TRAFFIC LIGHT MODELS ---
  buildTrafficLightModels() {
    const poleMat = new THREE.MeshStandardMaterial({
      color: 0x22262c,
      metalness: 0.85,
      roughness: 0.25
    });

    const housingMat = new THREE.MeshStandardMaterial({
      color: 0x111317,
      metalness: 0.7,
      roughness: 0.4
    });

    this.intersections.forEach(inter => {
      const { x, z } = inter;

      // Place 2 traffic light poles per intersection on diagonal sidewalk corners
      // NW corner: (x - 10.5, z - 10.5)
      // SE corner: (x + 10.5, z + 10.5)
      const polePositions = [
        { pos: new THREE.Vector3(x - 10.2, 0, z - 10.2), armRotY: 0 },
        { pos: new THREE.Vector3(x + 10.2, 0, z + 10.2), armRotY: Math.PI }
      ];

      polePositions.forEach(pData => {
        const poleGroup = new THREE.Group();
        poleGroup.position.copy(pData.pos);
        poleGroup.rotation.y = pData.armRotY;

        // 1. Vertical Steel Pole
        const poleGeo = new THREE.CylinderGeometry(0.16, 0.24, 6.2, 8);
        const pole = new THREE.Mesh(poleGeo, poleMat);
        pole.position.y = 3.1;
        pole.castShadow = true;
        poleGroup.add(pole);

        // Pole base collar
        const baseGeo = new THREE.CylinderGeometry(0.32, 0.38, 0.4, 8);
        const base = new THREE.Mesh(baseGeo, poleMat);
        base.position.y = 0.2;
        poleGroup.add(base);

        // 2. Horizontal Mast Arm extending over street lanes
        const armGeo = new THREE.CylinderGeometry(0.12, 0.14, 4.2, 8);
        const arm = new THREE.Mesh(armGeo, poleMat);
        arm.rotation.z = Math.PI / 2;
        arm.position.set(2.1, 5.8, 0);
        poleGroup.add(arm);

        // 3. Avenue Signal Head (Facing Avenue traffic)
        const aveHead = this.createSignalHead(housingMat, 'ave');
        aveHead.position.set(3.4, 5.3, 0);
        aveHead.rotation.y = Math.PI; // Faces approaching avenue traffic
        poleGroup.add(aveHead);

        // 4. Street Signal Head (Facing Street traffic)
        const streetHead = this.createSignalHead(housingMat, 'street');
        streetHead.position.set(1.4, 5.3, 0);
        streetHead.rotation.y = -Math.PI / 2; // Faces approaching street traffic
        poleGroup.add(streetHead);

        // 5. Pedestrian Signal Box at eye level
        const pedBoxGeo = new THREE.BoxGeometry(0.35, 0.55, 0.25);
        const pedBox = new THREE.Mesh(pedBoxGeo, housingMat);
        pedBox.position.set(0.2, 2.3, 0.2);
        poleGroup.add(pedBox);

        const pedWalkMat = new THREE.MeshBasicMaterial({ color: 0x00ff44 });
        const pedWalkMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.22), pedWalkMat);
        pedWalkMesh.position.set(0.2, 2.45, 0.33);
        poleGroup.add(pedWalkMesh);

        const pedDontMat = new THREE.MeshBasicMaterial({ color: 0xff0022 });
        const pedDontMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.22), pedDontMat);
        pedDontMesh.position.set(0.2, 2.18, 0.33);
        poleGroup.add(pedDontMesh);

        this.scene.add(poleGroup);

        inter.lightMeshes.push({
          aveRed: aveHead.userData.red,
          aveYellow: aveHead.userData.yellow,
          aveGreen: aveHead.userData.green,
          streetRed: streetHead.userData.red,
          streetYellow: streetHead.userData.yellow,
          streetGreen: streetHead.userData.green,
          pedWalk: pedWalkMesh,
          pedDont: pedDontMesh
        });
      });

      // Ambient PointLight for night-time neon glow at intersection
      const pLight = new THREE.PointLight(0x00ff66, 0.8, 22);
      pLight.position.set(x, 4.5, z);
      this.scene.add(pLight);
      inter.pointLight = pLight;
    });
  }

  createSignalHead(housingMat, type) {
    const headGroup = new THREE.Group();

    // Signal casing box
    const boxGeo = new THREE.BoxGeometry(0.6, 1.45, 0.42);
    const box = new THREE.Mesh(boxGeo, housingMat);
    headGroup.add(box);

    // Visor hoods & lenses for Red (top), Yellow (middle), Green (bottom)
    const lensGeo = new THREE.SphereGeometry(0.16, 12, 12);
    const visorGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.2, 8, 1, true, 0, Math.PI);
    visorGeo.rotateX(Math.PI / 2);

    // Red lens
    const redMat = new THREE.MeshBasicMaterial({ color: 0x220000 });
    const redMesh = new THREE.Mesh(lensGeo, redMat);
    redMesh.position.set(0, 0.46, 0.16);
    headGroup.add(redMesh);

    // Yellow lens
    const yellowMat = new THREE.MeshBasicMaterial({ color: 0x221800 });
    const yellowMesh = new THREE.Mesh(lensGeo, yellowMat);
    yellowMesh.position.set(0, 0.0, 0.16);
    headGroup.add(yellowMesh);

    // Green lens
    const greenMat = new THREE.MeshBasicMaterial({ color: 0x002208 });
    const greenMesh = new THREE.Mesh(lensGeo, greenMat);
    greenMesh.position.set(0, -0.46, 0.16);
    headGroup.add(greenMesh);

    // Visors
    [0.46, 0.0, -0.46].forEach(y => {
      const visor = new THREE.Mesh(visorGeo, housingMat);
      visor.position.set(0, y + 0.08, 0.2);
      headGroup.add(visor);
    });

    headGroup.userData = {
      type,
      red: redMesh,
      yellow: yellowMesh,
      green: greenMesh
    };

    return headGroup;
  }

  // --- CONNECTED SIDEWALK & CROSSWALK GRAPH FOR PEDESTRIANS ---
  buildSidewalkGraph() {
    let nodeCounter = 0;

    const addNode = (pos, type = 'sidewalk', intersectionId = null) => {
      const id = nodeCounter++;
      const node = { id, pos, type, intersectionId, neighbors: [] };
      this.sidewalkNodes.push(node);
      this.sidewalkGraph.set(id, node);
      return node;
    };

    const linkNodes = (nA, nB, isCrosswalk = false, crosswalkSide = null, intersectionId = null) => {
      if (!nA || !nB) return;
      nA.neighbors.push({ targetId: nB.id, isCrosswalk, crosswalkSide, intersectionId });
      nB.neighbors.push({ targetId: nA.id, isCrosswalk, crosswalkSide, intersectionId });
    };

    // 1. Generate Corner Nodes for all 15 Intersections
    const intersectionCorners = new Map(); // interId -> { NW, NE, SW, SE }

    this.intersections.forEach(inter => {
      const { x, z, id } = inter;
      const nw = addNode(new THREE.Vector3(x - 10.2, 0.5, z - 10.2), 'corner', id);
      const ne = addNode(new THREE.Vector3(x + 10.2, 0.5, z - 10.2), 'corner', id);
      const sw = addNode(new THREE.Vector3(x - 10.2, 0.5, z + 10.2), 'corner', id);
      const se = addNode(new THREE.Vector3(x + 10.2, 0.5, z + 10.2), 'corner', id);

      intersectionCorners.set(id, { nw, ne, sw, se });

      // Link corners across Zebra Crossings:
      // North Crossing (NW <-> NE across Avenue if avenue continues north)
      linkNodes(nw, ne, z > -200, 'north', id);
      // South Crossing (SW <-> SE across Avenue if avenue continues south)
      linkNodes(sw, se, z < 200, 'south', id);
      // West Crossing (NW <-> SW across Street if street continues west)
      linkNodes(nw, sw, x > -180, 'west', id);
      // East Crossing (NE <-> SE across Street if street continues east)
      linkNodes(ne, se, x < 60, 'east', id);
    });

    // 2. Link Intersections along Avenues with Sidewalk Waypoints
    this.avenueX.forEach((ax, aIdx) => {
      for (let sIdx = 0; sIdx < this.streetZ.length - 1; sIdx++) {
        const interA = this.intersections.find(i => i.x === ax && i.z === this.streetZ[sIdx]);
        const interB = this.intersections.find(i => i.x === ax && i.z === this.streetZ[sIdx + 1]);
        const cornersA = intersectionCorners.get(interA.id);
        const cornersB = intersectionCorners.get(interB.id);

        // West sidewalk of this avenue (connects SW of A to NW of B)
        const wNode1 = addNode(new THREE.Vector3(ax - 10.2, 0.5, this.streetZ[sIdx] + 35));
        const wNode2 = addNode(new THREE.Vector3(ax - 10.2, 0.5, this.streetZ[sIdx + 1] - 35));
        linkNodes(cornersA.sw, wNode1);
        linkNodes(wNode1, wNode2);
        linkNodes(wNode2, cornersB.nw);

        // East sidewalk of this avenue (connects SE of A to NE of B)
        const eNode1 = addNode(new THREE.Vector3(ax + 10.2, 0.5, this.streetZ[sIdx] + 35));
        const eNode2 = addNode(new THREE.Vector3(ax + 10.2, 0.5, this.streetZ[sIdx + 1] - 35));
        linkNodes(cornersA.se, eNode1);
        linkNodes(eNode1, eNode2);
        linkNodes(eNode2, cornersB.ne);
      }
    });

    // 3. Link Intersections along Cross Streets with Sidewalk Waypoints
    this.streetZ.forEach(sz => {
      for (let aIdx = 0; aIdx < this.avenueX.length - 1; aIdx++) {
        const interA = this.intersections.find(i => i.x === this.avenueX[aIdx] && i.z === sz);
        const interB = this.intersections.find(i => i.x === this.avenueX[aIdx + 1] && i.z === sz);
        const cornersA = intersectionCorners.get(interA.id);
        const cornersB = intersectionCorners.get(interB.id);

        // North sidewalk of this street (connects NE of A to NW of B)
        const nNode1 = addNode(new THREE.Vector3(this.avenueX[aIdx] + 35, 0.5, sz - 10.2));
        const nNode2 = addNode(new THREE.Vector3(this.avenueX[aIdx + 1] - 35, 0.5, sz - 10.2));
        linkNodes(cornersA.ne, nNode1);
        linkNodes(nNode1, nNode2);
        linkNodes(nNode2, cornersB.nw);

        // South sidewalk of this street (connects SE of A to SW of B)
        const sNode1 = addNode(new THREE.Vector3(this.avenueX[aIdx] + 35, 0.5, sz + 10.2));
        const sNode2 = addNode(new THREE.Vector3(this.avenueX[aIdx + 1] - 35, 0.5, sz + 10.2));
        linkNodes(cornersA.se, sNode1);
        linkNodes(sNode1, sNode2);
        linkNodes(sNode2, cornersB.sw);
      }
    });
  }

  // --- TRAFFIC LIGHT SIMULATION UPDATE ---
  update(delta) {
    this.intersections.forEach(inter => {
      inter.timer += delta;
      const currentDuration = inter.durations[inter.state];

      if (inter.timer >= currentDuration) {
        inter.timer = 0;
        // Cycle states: AVE_GREEN -> AVE_YELLOW -> STREET_GREEN -> STREET_YELLOW -> AVE_GREEN
        if (inter.state === 'AVE_GREEN') inter.state = 'AVE_YELLOW';
        else if (inter.state === 'AVE_YELLOW') inter.state = 'STREET_GREEN';
        else if (inter.state === 'STREET_GREEN') inter.state = 'STREET_YELLOW';
        else if (inter.state === 'STREET_YELLOW') inter.state = 'AVE_GREEN';
      }

      // Update Visual Meshes & Glowing Lights
      const aveGreenOn = inter.state === 'AVE_GREEN';
      const aveYellowOn = inter.state === 'AVE_YELLOW';
      const aveRedOn = inter.state === 'STREET_GREEN' || inter.state === 'STREET_YELLOW';

      const streetGreenOn = inter.state === 'STREET_GREEN';
      const streetYellowOn = inter.state === 'STREET_YELLOW';
      const streetRedOn = inter.state === 'AVE_GREEN' || inter.state === 'AVE_YELLOW';

      inter.lightMeshes.forEach(lm => {
        // Avenue head
        lm.aveRed.material.color.setHex(aveRedOn ? 0xff0022 : 0x220000);
        lm.aveYellow.material.color.setHex(aveYellowOn ? 0xffaa00 : 0x221800);
        lm.aveGreen.material.color.setHex(aveGreenOn ? 0x00ff44 : 0x002208);

        // Street head
        lm.streetRed.material.color.setHex(streetRedOn ? 0xff0022 : 0x220000);
        lm.streetYellow.material.color.setHex(streetYellowOn ? 0xffaa00 : 0x221800);
        lm.streetGreen.material.color.setHex(streetGreenOn ? 0x00ff44 : 0x002208);

        // Pedestrian signals:
        // When Avenue has Red, crossing Avenue is safe (WALK)
        // When Street has Red, crossing Street is safe (WALK)
        lm.pedWalk.material.color.setHex((aveRedOn || streetRedOn) ? 0x00ff66 : 0x002200);
        lm.pedDont.material.color.setHex((aveGreenOn || streetGreenOn) ? 0xff0033 : 0x220000);
      });

      // PointLight color matches current green signal
      if (inter.pointLight) {
        if (aveGreenOn) inter.pointLight.color.setHex(0x00ff66);
        else if (aveYellowOn || streetYellowOn) inter.pointLight.color.setHex(0xffaa00);
        else inter.pointLight.color.setHex(0x00f0ff);
      }
    });
  }

  // --- QUERY: SHOULD CAR STOP FOR TRAFFIC LIGHT ---
  shouldVehicleStopForLight(vehPos, heading) {
    const forwardVec = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), heading);
    const isAvenue = Math.abs(forwardVec.z) >= Math.abs(forwardVec.x);

    for (let i = 0; i < this.intersections.length; i++) {
      const inter = this.intersections[i];
      const dx = inter.x - vehPos.x;
      const dz = inter.z - vehPos.z;
      const distSq = dx * dx + dz * dz;

      // Only check intersections within 35m ahead
      if (distSq > 35 * 35) continue;

      const toInter = new THREE.Vector3(dx, 0, dz);
      const fwdDist = toInter.dot(forwardVec);

      // Must be in front of car (between 3m and 26m ahead)
      if (fwdDist > 2.5 && fwdDist < 26.0) {
        const latDist = Math.abs(toInter.x * forwardVec.z - toInter.z * forwardVec.x);
        if (latDist > 9.0) continue; // Not on our road approach

        if (isAvenue) {
          // Driving on Avenue: Stop if Avenue signal is RED or YELLOW
          if (inter.state === 'STREET_GREEN' || inter.state === 'STREET_YELLOW' || inter.state === 'AVE_YELLOW') {
            return {
              shouldStop: true,
              reason: 'red_light',
              dist: fwdDist,
              intersection: inter
            };
          }
        } else {
          // Driving on Cross Street: Stop if Street signal is RED or YELLOW
          if (inter.state === 'AVE_GREEN' || inter.state === 'AVE_YELLOW' || inter.state === 'STREET_YELLOW') {
            return {
              shouldStop: true,
              reason: 'red_light',
              dist: fwdDist,
              intersection: inter
            };
          }
        }
      }
    }

    return { shouldStop: false };
  }

  // --- QUERY: CAN PEDESTRIAN CROSS ZEBRA CROSSING ---
  canPedestrianCross(intersectionId, crosswalkSide) {
    const inter = this.intersections.find(i => i.id === intersectionId);
    if (!inter) return true; // Safe fallback

    // North & South crosswalks cross the Avenue
    // Safe to cross when Avenue traffic is stopped (STREET_GREEN or STREET_YELLOW)
    if (crosswalkSide === 'north' || crosswalkSide === 'south') {
      return inter.state === 'STREET_GREEN';
    }

    // East & West crosswalks cross the Street
    // Safe to cross when Street traffic is stopped (AVE_GREEN)
    if (crosswalkSide === 'east' || crosswalkSide === 'west') {
      return inter.state === 'AVE_GREEN';
    }

    return true;
  }
}
