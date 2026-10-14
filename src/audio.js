// High fidelity procedural Web Audio engine for Vice City
// Zero external asset dependencies - instant, punchy, 100% reliable 80s audio!

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.initialized = false;
    this.engineGain = null;
    this.engineOsc = null;
    this.radioOscillators = [];
    this.radioInterval = null;
    this.radioStations = [
      { name: "FLASH FM 105.8", genre: "pop", bpm: 120, key: 0 },
      { name: "WAVE 103", genre: "synthwave", bpm: 110, key: 5 },
      { name: "V-ROCK", genre: "rock", bpm: 130, key: 7 },
      { name: "RADIO ESPANTOSO", genre: "latin", bpm: 115, key: 3 }
    ];
    this.currentStationIndex = 0;
    this.isRadioPlaying = false;
    this.sirenOsc = null;
    this.sirenGain = null;
    this.sirenInterval = null;
  }

  init() {
    if (this.initialized) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();
    this.initialized = true;
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // --- WEAPONS AUDIO ---
  playShoot(type = 'pistol') {
    if (!this.initialized) return;
    this.resume();
    const t = this.ctx.currentTime;

    if (type === 'fist') {
      // Punch whoosh and impact
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(120, t);
      osc.frequency.exponentialRampToValueAtTime(30, t + 0.12);
      gain.gain.setValueAtTime(0.4, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.12);
      return;
    }

    if (type === 'pistol') {
      // 9mm Pistol: sharp snap + pop
      this.playNoise(0.12, 1800, 150, 0.5);
      this.playTone(320, 40, 0.15, 'sawtooth', 0.4);
    } else if (type === 'smg') {
      // Uzi: rapid high crack
      this.playNoise(0.08, 2600, 200, 0.4);
      this.playTone(380, 50, 0.08, 'sawtooth', 0.3);
    } else if (type === 'm4') {
      // M4: punchy deep military crackle
      this.playNoise(0.2, 1200, 80, 0.6);
      this.playTone(220, 30, 0.22, 'sawtooth', 0.6);
      this.playTone(90, 25, 0.28, 'triangle', 0.8);
    } else if (type === 'shotgun') {
      // Shotgun: heavy boom + pellet blast
      this.playNoise(0.35, 900, 60, 0.8);
      this.playTone(180, 20, 0.35, 'sawtooth', 0.7);
      this.playTone(80, 20, 0.45, 'sine', 1.0);
    } else if (type === 'rpg') {
      // RPG Launch whoosh
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(90, t);
      osc.frequency.exponentialRampToValueAtTime(450, t + 0.4);
      gain.gain.setValueAtTime(0.6, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.45);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.45);
    }
  }

  playExplosion() {
    if (!this.initialized) return;
    this.resume();
    const t = this.ctx.currentTime;
    // Massive detonation low boom
    this.playTone(120, 18, 1.2, 'triangle', 1.0);
    // Crashing rumble noise
    this.playNoise(1.4, 400, 30, 0.9);
  }

  playHitSound(isFlesh = false) {
    if (!this.initialized) return;
    this.resume();
    if (isFlesh) {
      this.playNoise(0.08, 500, 100, 0.3);
      this.playTone(160, 40, 0.09, 'sine', 0.25);
    } else {
      // Ricochet / metal clink
      this.playTone(1800 + Math.random() * 800, 600, 0.1, 'sine', 0.3);
      this.playNoise(0.05, 3000, 1200, 0.3);
    }
  }

  playReload() {
    if (!this.initialized) return;
    this.resume();
    // Mag drop and click
    const t = this.ctx.currentTime;
    this.playTone(800, 300, 0.05, 'triangle', 0.2);
    setTimeout(() => {
      this.playTone(1200, 600, 0.08, 'sawtooth', 0.25);
    }, 280);
  }

  playMoney() {
    if (!this.initialized) return;
    this.resume();
    const t = this.ctx.currentTime;
    [987.77, 1318.51].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.frequency.setValueAtTime(freq, t + idx * 0.08);
      gain.gain.setValueAtTime(0.2, t + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, t + idx * 0.08 + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + idx * 0.08);
      osc.stop(t + idx * 0.08 + 0.15);
    });
  }

  playWantedAlert() {
    if (!this.initialized) return;
    this.resume();
    const t = this.ctx.currentTime;
    [440, 554.37, 659.25, 880].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, t + idx * 0.09);
      gain.gain.setValueAtTime(0.25, t + idx * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.01, t + idx * 0.09 + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t + idx * 0.09);
      osc.stop(t + idx * 0.09 + 0.18);
    });
  }

  // --- VEHICLE AUDIO ---
  startEngineSound() {
    if (!this.initialized || this.engineOsc) return;
    this.resume();
    const t = this.ctx.currentTime;
    this.engineOsc = this.ctx.createOscillator();
    this.engineOsc.type = 'sawtooth';
    this.engineOsc.frequency.setValueAtTime(55, t);

    // Filter to give engine body rumble
    this.engineFilter = this.ctx.createBiquadFilter();
    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.setValueAtTime(260, t);

    this.engineGain = this.ctx.createGain();
    this.engineGain.gain.setValueAtTime(0.25, t);

    this.engineOsc.connect(this.engineFilter);
    this.engineFilter.connect(this.engineGain);
    this.engineGain.connect(this.ctx.destination);
    this.engineOsc.start(t);
  }

  updateEngine(rpmRatio) {
    if (!this.engineOsc || !this.engineFilter) return;
    const baseFreq = 45;
    const targetFreq = baseFreq + rpmRatio * 180;
    this.engineOsc.frequency.setTargetAtTime(targetFreq, this.ctx.currentTime, 0.08);
    this.engineFilter.frequency.setTargetAtTime(200 + rpmRatio * 550, this.ctx.currentTime, 0.08);
  }

  stopEngineSound() {
    if (this.engineOsc) {
      try {
        this.engineOsc.stop();
        this.engineOsc.disconnect();
      } catch (e) {}
      this.engineOsc = null;
    }
  }

  playHorn() {
    if (!this.initialized) return;
    this.resume();
    const t = this.ctx.currentTime;
    [440, 550].forEach(f => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(f, t);
      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.45);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.45);
    });
  }

  playTireSkid() {
    if (!this.initialized) return;
    this.playNoise(0.2, 3200, 800, 0.2);
  }

  playCrash() {
    if (!this.initialized) return;
    this.playNoise(0.4, 800, 100, 0.7);
    this.playTone(120, 30, 0.3, 'sawtooth', 0.5);
  }

  // --- POLICE SIREN ---
  startPoliceSiren() {
    if (!this.initialized || this.sirenOsc) return;
    this.resume();
    const t = this.ctx.currentTime;
    this.sirenOsc = this.ctx.createOscillator();
    this.sirenGain = this.ctx.createGain();
    this.sirenOsc.type = 'sine';
    this.sirenOsc.frequency.setValueAtTime(650, t);
    this.sirenGain.gain.setValueAtTime(0.25, t);

    this.sirenOsc.connect(this.sirenGain);
    this.sirenGain.connect(this.ctx.destination);
    this.sirenOsc.start(t);

    let high = false;
    this.sirenInterval = setInterval(() => {
      if (!this.sirenOsc) return;
      const freq = high ? 650 : 1050;
      this.sirenOsc.frequency.setTargetAtTime(freq, this.ctx.currentTime, 0.2);
      high = !high;
    }, 450);
  }

  stopPoliceSiren() {
    if (this.sirenInterval) {
      clearInterval(this.sirenInterval);
      this.sirenInterval = null;
    }
    if (this.sirenOsc) {
      try {
        this.sirenOsc.stop();
        this.sirenOsc.disconnect();
      } catch (e) {}
      this.sirenOsc = null;
    }
  }

  // --- 80s PROCEDURAL RADIO ENGINE ---
  startRadio() {
    if (!this.initialized) return;
    this.resume();
    this.stopRadio();
    this.isRadioPlaying = true;

    const station = this.radioStations[this.currentStationIndex];
    const tempo = (60 / station.bpm) * 1000;
    let step = 0;

    // 80s Synth bass chords and arpeggiator patterns
    const scales = {
      pop: [220, 246.94, 277.18, 329.63, 369.99, 440], // A Major / F#m
      synthwave: [196, 220, 246.94, 293.66, 329.63, 392], // G / Em
      rock: [164.81, 196, 220, 246.94, 293.66, 329.63], // E minor pentatonic
      latin: [261.63, 293.66, 329.63, 349.23, 392, 440]  // C Major groovy
    };

    const notes = scales[station.genre] || scales.pop;

    this.radioInterval = setInterval(() => {
      if (!this.isRadioPlaying || !this.ctx) return;
      const t = this.ctx.currentTime;
      step = (step + 1) % 16;

      // Bass beat on 0, 4, 8, 12
      if (step % 4 === 0) {
        this.playTone(notes[0] / 2, notes[0] / 4, 0.18, 'sawtooth', 0.18);
        this.playNoise(0.04, 3000, 1500, 0.08); // hi-hat
      } else if (step % 2 === 0) {
        // Snare / clap on 2 and 6
        this.playNoise(0.12, 1200, 200, 0.14);
      } else {
        // Offbeat hi-hat
        this.playNoise(0.03, 5000, 3000, 0.06);
      }

      // Synth Arp Note
      const noteIdx = (step * 2) % notes.length;
      const freq = notes[noteIdx] * (step % 8 < 4 ? 1 : 1.5);
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = station.genre === 'synthwave' ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400 + Math.sin(step) * 600, t);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.23);
    }, tempo / 4);
  }

  nextStation() {
    this.currentStationIndex = (this.currentStationIndex + 1) % this.radioStations.length;
    if (this.isRadioPlaying) {
      this.startRadio();
    }
    return this.radioStations[this.currentStationIndex].name;
  }

  stopRadio() {
    this.isRadioPlaying = false;
    if (this.radioInterval) {
      clearInterval(this.radioInterval);
      this.radioInterval = null;
    }
  }

  // --- AUDIO UTILITIES ---
  playTone(startFreq, endFreq, duration, type = 'sine', volume = 0.3) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(startFreq, t);
    osc.frequency.exponentialRampToValueAtTime(Math.max(10, endFreq), t + duration);
    gain.gain.setValueAtTime(volume, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + duration);
  }

  playNoise(duration, filterFreq, qVal = 100, volume = 0.3) {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(filterFreq, this.ctx.currentTime);
    filter.Q.setValueAtTime(qVal, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(this.ctx.currentTime);
    noise.stop(this.ctx.currentTime + duration);
  }
}

export const soundEngine = new SoundEngine();
