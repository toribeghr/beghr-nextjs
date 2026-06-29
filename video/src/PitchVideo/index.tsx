import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
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
  black: "#0A0A0A",
  white: "#FFFFFF",
  grey: "#9A9A9A",
};

const FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export const beatSchema = z.object({
  text: z.string(),
  // Substring of `text` to render in brand gold (optional).
  highlight: z.string().optional(),
  // How long this beat stays on screen, in frames (30fps => 30 = 1s).
  durationInFrames: z.number(),
  // The final brand lockup renders larger, with a gold rule + url.
  brand: z.boolean().optional(),
  url: z.string().optional(),
});

export const pitchVideoSchema = z.object({
  beats: z.array(beatSchema),
});

export type Beat = z.infer<typeof beatSchema>;
export type PitchVideoProps = z.infer<typeof pitchVideoSchema>;

// Total composition length = sum of every beat's duration.
export const totalDuration = (beats: Beat[]) =>
  beats.reduce((sum, b) => sum + b.durationInFrames, 0);

// Split a line so the `highlight` portion can be coloured gold.
const renderText = (text: string, highlight?: string) => {
  if (!highlight || !text.includes(highlight)) return text;
  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <span style={{ color: BRAND.gold }}>{highlight}</span>
      {after}
    </>
  );
};

const BeatCard: React.FC<{ beat: Beat }> = ({ beat }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { durationInFrames } = beat;

  const enter = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 20 });
  const translateY = interpolate(enter, [0, 1], [50, 0]);
  const opacity = interpolate(
    frame,
    [0, 14, durationInFrames - 12, durationInFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  if (beat.brand) {
    const lineW = interpolate(enter, [0, 1], [0, 220]);
    return (
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 90,
          opacity,
        }}
      >
        <div style={{ transform: `translateY(${translateY}px)`, textAlign: "center" }}>
          <div
            style={{
              height: 5,
              width: lineW,
              background: BRAND.gold,
              margin: "0 auto 44px",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              fontFamily: FONT,
              color: BRAND.white,
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: -1,
            }}
          >
            {beat.text}
          </div>
          {beat.url ? (
            <div
              style={{
                fontFamily: FONT,
                color: BRAND.gold,
                fontSize: 50,
                fontWeight: 600,
                marginTop: 36,
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
    <AbsoluteFill
      style={{ justifyContent: "center", alignItems: "center", padding: 110, opacity }}
    >
      <div
        style={{
          transform: `translateY(${translateY}px)`,
          fontFamily: FONT,
          color: BRAND.white,
          fontSize: 84,
          fontWeight: 700,
          lineHeight: 1.18,
          textAlign: "center",
          letterSpacing: -1.5,
        }}
      >
        {renderText(beat.text, beat.highlight)}
      </div>
    </AbsoluteFill>
  );
};

// Thin gold progress bar across the bottom for the whole video.
const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const w = interpolate(frame, [0, durationInFrames], [0, 100], {
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        height: 10,
        width: `${w}%`,
        background: BRAND.gold,
      }}
    />
  );
};

export const PitchVideo: React.FC<PitchVideoProps> = ({ beats }) => {
  let from = 0;
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      {beats.map((beat, i) => {
        const start = from;
        from += beat.durationInFrames;
        return (
          <Sequence key={i} from={start} durationInFrames={beat.durationInFrames}>
            <BeatCard beat={beat} />
          </Sequence>
        );
      })}
      <ProgressBar />
    </AbsoluteFill>
  );
};

// --- HCM Software pillar page script (VIDEO-FRAMEWORK.md §3, approved v2) -----
export const hcmBeats: Beat[] = [
  { text: "You're here looking at HCM software.", highlight: "HCM software", durationInFrames: 75 },
  { text: "So can we ask —", durationInFrames: 45 },
  { text: "what's making you look right now?", highlight: "right now", durationInFrames: 75 },
  { text: "Is it the payroll that never quite reconciles?", highlight: "payroll", durationInFrames: 90 },
  { text: "Four logins just to get one answer?", highlight: "Four logins", durationInFrames: 85 },
  { text: "Or a feeling that this should be easier?", highlight: "easier", durationInFrames: 90 },
  { text: "Most teams can't name it exactly. They just know it's costing time.", highlight: "costing time", durationInFrames: 115 },
  { text: "If nothing changes — what does that cost you a year from now?", highlight: "a year from now", durationInFrames: 115 },
  { text: "We're genuinely curious what your setup looks like. The right fix depends on it.", highlight: "genuinely curious", durationInFrames: 120 },
  { text: "That's what iSolved People Cloud, set up by BEG, is built to solve.", highlight: "iSolved People Cloud", durationInFrames: 105 },
  { text: "One connected platform. 330% documented ROI.", highlight: "330% documented ROI", durationInFrames: 95 },
  { text: "No pitch. Just a conversation to see if it even fits.", highlight: "Just a conversation", durationInFrames: 100 },
  { text: "Business Executive Group", durationInFrames: 95, brand: true, url: "beghr.com" },
];
