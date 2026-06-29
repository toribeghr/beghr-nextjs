// Offline royalty-free music generator -> WAV. Pure Node, no deps, no network.
// Warm, uplifting corporate pad + soft arpeggio + bass, with reverb & gentle pulse.
const fs = require("fs");
const path = require("path");

const SR = 44100;
const DUR = 44; // seconds
const N = SR * DUR;
const L = new Float64Array(N);
const R = new Float64Array(N);

const midiToFreq = (m) => 440 * Math.pow(2, (m - 69) / 12);

// vi-IV-I-V-ish warm progression in C: Am7, Fmaj7, Cadd9, G
const CHORDS = [
  { pad: [45, 48, 52, 55], bass: 33 }, // Am7  (A C E G)
  { pad: [41, 45, 48, 52], bass: 29 }, // Fmaj7 (F A C E)
  { pad: [48, 52, 55, 62], bass: 36 }, // Cadd9 (C E G D)
  { pad: [43, 47, 50, 55], bass: 31 }, // G     (G B D G)
];
const CHORD_DUR = 5.3; // seconds per chord

// --- additive note renderer with attack/release envelope (click-free) ---
function addNote(buf, freq, start, dur, gain, attack, release, detune = 0, pan = 0) {
  const s0 = Math.floor(start * SR);
  const s1 = Math.min(N, Math.floor((start + dur) * SR));
  const aS = attack * SR;
  const rS = release * SR;
  const w = 2 * Math.PI * (freq * (1 + detune)) / SR;
  for (let i = s0; i < s1; i++) {
    const t = i - s0;
    const rem = s1 - i;
    let env = 1;
    if (t < aS) env = t / aS;
    if (rem < rS) env = Math.min(env, rem / rS);
    buf[i] += Math.sin(w * t) * gain * env;
  }
}

// Lay down chords across the timeline
let t = 0;
let ci = 0;
while (t < DUR) {
  const c = CHORDS[ci % CHORDS.length];
  // Pad: each chord tone with two slightly detuned oscillators (warmth), soft attack
  c.pad.forEach((m, idx) => {
    const f = midiToFreq(m + 12); // up an octave for body
    addNote(L, f, t, CHORD_DUR + 0.4, 0.10, 0.5, 0.8, -0.0015, 0);
    addNote(R, f, t, CHORD_DUR + 0.4, 0.10, 0.5, 0.8, +0.0015, 0);
  });
  // Bass: sustained root
  const bf = midiToFreq(c.bass);
  addNote(L, bf, t, CHORD_DUR + 0.3, 0.16, 0.15, 0.5);
  addNote(R, bf, t, CHORD_DUR + 0.3, 0.16, 0.15, 0.5);
  // Arpeggio: brighter eighth-note pattern over chord tones, gentle
  const eighth = 0.30;
  const pattern = [0, 1, 2, 3, 2, 1];
  for (let k = 0, at = t; at < t + CHORD_DUR; k++, at += eighth) {
    const m = c.pad[pattern[k % pattern.length]] + 24; // two octaves up
    const f = midiToFreq(m);
    const stereo = (k % 2) ? [0.05, 0.08] : [0.08, 0.05];
    addNote(L, f, at, eighth * 1.3, stereo[0], 0.01, 0.18);
    addNote(R, f, at, eighth * 1.3, stereo[1], 0.01, 0.18);
  }
  t += CHORD_DUR;
  ci++;
}

// --- simple stereo feedback reverb (two delay taps) ---
function reverb(buf) {
  const d1 = Math.floor(0.099 * SR), d2 = Math.floor(0.143 * SR);
  for (let i = 0; i < N; i++) {
    if (i >= d1) buf[i] += 0.28 * buf[i - d1];
    if (i >= d2) buf[i] += 0.20 * buf[i - d2];
  }
}
reverb(L);
reverb(R);

// --- gentle tremolo pulse (~1.5 Hz) for movement ---
for (let i = 0; i < N; i++) {
  const lfo = 0.85 + 0.15 * Math.sin(2 * Math.PI * 1.5 * (i / SR));
  L[i] *= lfo;
  R[i] *= lfo;
}

// --- master fades ---
const fin = 2.8 * SR, fout = 4.5 * SR;
for (let i = 0; i < N; i++) {
  let g = 1;
  if (i < fin) g = i / fin;
  if (i > N - fout) g = Math.min(g, (N - i) / fout);
  L[i] *= g; R[i] *= g;
}

// --- normalize to -3 dBFS ---
let peak = 0;
for (let i = 0; i < N; i++) peak = Math.max(peak, Math.abs(L[i]), Math.abs(R[i]));
const norm = (0.708) / (peak || 1);

// --- write 16-bit stereo WAV ---
const bytesPerSample = 2, channels = 2;
const dataLen = N * channels * bytesPerSample;
const buf = Buffer.alloc(44 + dataLen);
buf.write("RIFF", 0); buf.writeUInt32LE(36 + dataLen, 4); buf.write("WAVE", 8);
buf.write("fmt ", 12); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20);
buf.writeUInt16LE(channels, 22); buf.writeUInt32LE(SR, 24);
buf.writeUInt32LE(SR * channels * bytesPerSample, 28);
buf.writeUInt16LE(channels * bytesPerSample, 32); buf.writeUInt16LE(16, 34);
buf.write("data", 36); buf.writeUInt32LE(dataLen, 40);
let off = 44;
for (let i = 0; i < N; i++) {
  const l = Math.max(-1, Math.min(1, L[i] * norm));
  const r = Math.max(-1, Math.min(1, R[i] * norm));
  buf.writeInt16LE((l * 32767) | 0, off); off += 2;
  buf.writeInt16LE((r * 32767) | 0, off); off += 2;
}
const out = path.join(process.argv[2] || ".", "music-bed.wav");
fs.writeFileSync(out, buf);
console.log("wrote", out, (dataLen / 1e6).toFixed(1) + "MB", DUR + "s");
