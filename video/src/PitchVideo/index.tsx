import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { z } from "zod";

// ---------------------------------------------------------------------------
// Reusable "curious NEPQ" pitch video (vertical 1080x1920, text + music).
// Driven entirely by props so the SAME component renders a video for ANY page:
// pass that page's beats (see VIDEO-FRAMEWORK.md §3) and it animates them.
// ---------------------------------------------------------------------------

export const BRAND = {
  gold: "#ECAC60",
  goldSoft: "#F4C885",
  black: "#070707",
  white: "#FFFFFF",
};

const FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const LOGO = "beg-logo.png";
const MUSIC = "music-bed.wav";

export const beatSchema = z.object({
  text: z.string(),
  highlight: z.string().optional(),
  durationInFrames: z.number(),
  brand: z.boolean().optional(),
  url: z.string().optional(),
});

export const pitchVideoSchema = z.object({
  beats: z.array(beatSchema),
});

export type Beat = z.infer<typeof beatSchema>;
export type PitchVideoProps = z.infer<typeof pitchVideoSchema>;

export const totalDuration = (beats: Beat[]) =>
  beats.reduce((sum, b) => sum + b.durationInFrames, 0);

// Bigger text, sized to the line length so short punchy lines read HUGE.
const fontFor = (text: string) => {
  const n = text.length;
  if (n <= 26) return 150;
  if (n <= 42) return 124;
  if (n <= 64) return 104;
  return 88;
};

// Render the line, wrapping `highlight` in gold with an animated underline wipe.
const renderText = (text: string, highlight: string | undefined, u: number) => {
  if (!highlight || !text.includes(highlight)) return text;
  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <span style={{ position: "relative", color: BRAND.gold, whiteSpace: "nowrap" }}>
        {highlight}
        <span
          style={{
            position: "absolute",
            left: 0,
            bottom: -14,
            height: 10,
            width: `${u * 100}%`,
            background: BRAND.gold,
            borderRadius: 6,
          }}
        />
      </span>
      {after}
    </>
  );
};

const BeatCard: React.FC<{ beat: Beat }> = ({ beat }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { durationInFrames } = beat;

  // Punchy entrance: overshooting spring drives scale + lift.
  const enter = spring({
    frame,
    fps,
    config: { damping: 13, stiffness: 110, mass: 0.9 },
  });
  const scale = interpolate(enter, [0, 1], [0.78, 1]);
  const translateY = interpolate(enter, [0, 1], [70, 0]);
  // Drift + scale-up slightly on the way out for energy.
  const exit = interpolate(frame, [durationInFrames - 14, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(
    frame,
    [0, 10, durationInFrames - 12, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  const outScale = interpolate(exit, [0, 1], [1, 1.08]);
  const underline = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  if (beat.brand) {
    const ring = interpolate(enter, [0, 1], [0, 1]);
    return (
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity }}>
        <div style={{ transform: `translateY(${translateY}px)`, textAlign: "center" }}>
          <Img
            src={staticFile(LOGO)}
            style={{
              width: 280,
              height: 280,
              objectFit: "contain",
              transform: `scale(${interpolate(ring, [0, 1], [0.6, 1])})`,
              marginBottom: 30,
              filter: "drop-shadow(0 0 40px rgba(236,172,96,0.35))",
            }}
          />
          <div
            style={{
              height: 6,
              width: interpolate(ring, [0, 1], [0, 260]),
              background: BRAND.gold,
              margin: "0 auto 40px",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              fontFamily: FONT,
              color: BRAND.white,
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
            }}
          >
            {beat.text}
          </div>
          {beat.url ? (
            <div
              style={{
                fontFamily: FONT,
                color: BRAND.gold,
                fontSize: 58,
                fontWeight: 700,
                marginTop: 38,
                letterSpacing: 1,
              }}
            >
              {beat.url}
            </div>
          ) : null}
        </div>
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 80, opacity }}>
      <div
        style={{
          transform: `translateY(${translateY}px) scale(${scale * outScale})`,
          fontFamily: FONT,
          color: BRAND.white,
          fontSize: fontFor(beat.text),
          fontWeight: 800,
          lineHeight: 1.12,
          textAlign: "center",
          letterSpacing: -2,
          textShadow: "0 6px 40px rgba(0,0,0,0.5)",
        }}
      >
        {renderText(beat.text, beat.highlight, underline)}
      </div>
    </AbsoluteFill>
  );
};

// Living background: a large gold radial glow that slowly drifts and breathes.
const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const x = 50 + 18 * Math.sin((frame / durationInFrames) * Math.PI * 2);
  const y = 42 + 14 * Math.cos((frame / durationInFrames) * Math.PI * 2 * 0.8);
  const pulse = 0.22 + 0.06 * Math.sin(frame / 18);
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at ${x}% ${y}%, rgba(236,172,96,${pulse}) 0%, rgba(236,172,96,0.04) 38%, ${BRAND.black} 72%)`,
      }}
    />
  );
};

// Persistent small logo at top, subtle, brand-present throughout.
const TopLogo: React.FC = () => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [6, 24], [0, 0.92], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <Img
      src={staticFile(LOGO)}
      style={{
        position: "absolute",
        top: 70,
        left: "50%",
        transform: "translateX(-50%)",
        width: 96,
        height: 96,
        objectFit: "contain",
        opacity: o,
      }}
    />
  );
};

const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const w = interpolate(frame, [0, durationInFrames], [0, 100], { extrapolateRight: "clamp" });
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, height: 12, width: `${w}%`, background: BRAND.gold }} />
  );
};

export const PitchVideo: React.FC<PitchVideoProps> = ({ beats }) => {
  const { durationInFrames } = useVideoConfig();
  let from = 0;
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      <Background />
      <Audio src={staticFile(MUSIC)} volume={0.85} endAt={durationInFrames} />
      {beats.map((beat, i) => {
        const start = from;
        from += beat.durationInFrames;
        return (
          <Sequence key={i} from={start} durationInFrames={beat.durationInFrames}>
            <BeatCard beat={beat} />
          </Sequence>
        );
      })}
      <TopLogo />
      <ProgressBar />
    </AbsoluteFill>
  );
};

// --- HCM Software pillar page script (VIDEO-FRAMEWORK.md §3, approved v2) -----
export const hcmBeats: Beat[] = [
  { text: "You're here looking at HCM software.", highlight: "HCM software", durationInFrames: 80 },
  { text: "So can we ask —", durationInFrames: 48 },
  { text: "what's making you look right now?", highlight: "right now", durationInFrames: 78 },
  { text: "Is it the payroll that never quite reconciles?", highlight: "payroll", durationInFrames: 92 },
  { text: "Four logins just to get one answer?", highlight: "Four logins", durationInFrames: 88 },
  { text: "Or a feeling that this should be easier?", highlight: "easier", durationInFrames: 92 },
  { text: "Most teams can't name it. They just know it's costing time.", highlight: "costing time", durationInFrames: 115 },
  { text: "If nothing changes — what does that cost a year from now?", highlight: "a year from now", durationInFrames: 118 },
  { text: "We're genuinely curious what your setup looks like.", highlight: "genuinely curious", durationInFrames: 110 },
  { text: "That's what iSolved People Cloud, set up by BEG, solves.", highlight: "iSolved People Cloud", durationInFrames: 108 },
  { text: "One platform. 330% documented ROI.", highlight: "330% documented ROI", durationInFrames: 98 },
  { text: "No pitch. Just a conversation to see if it fits.", highlight: "Just a conversation", durationInFrames: 102 },
  { text: "Business Executive Group", durationInFrames: 100, brand: true, url: "beghr.com" },
];
