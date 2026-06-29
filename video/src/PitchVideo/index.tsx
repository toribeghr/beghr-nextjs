import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  TransitionSeries,
  linearTiming,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { z } from "zod";

// ---------------------------------------------------------------------------
// Reusable "curious NEPQ" pitch video — luxury / bold / punchy, for a C-suite
// audience. Mixes real imagery (Ken Burns), motion-graphics (counter), and
// kinetic typography, stitched with transitions. Driven by a `scenes` config so
// the SAME component renders a video for ANY page (see VIDEO-FRAMEWORK.md).
// ---------------------------------------------------------------------------

export const BRAND = {
  gold: "#ECAC60",
  goldBright: "#F6CE8C",
  black: "#070707",
  white: "#FFFFFF",
};
const FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
const LOGO = "beg-logo.png";
const MUSIC = "music-bed.wav";
const TD = 12; // transition duration (frames) — short = punchy

export const sceneSchema = z.object({
  type: z.enum(["hero", "type", "stat", "brand"]),
  text: z.string().optional(),
  highlight: z.string().optional(),
  eyebrow: z.string().optional(),
  image: z.string().optional(),
  value: z.number().optional(),
  prefix: z.string().optional(),
  suffix: z.string().optional(),
  label: z.string().optional(),
  url: z.string().optional(),
  durationInFrames: z.number(),
});
export const pitchVideoSchema = z.object({ scenes: z.array(sceneSchema) });
export type Scene = z.infer<typeof sceneSchema>;
export type PitchVideoProps = z.infer<typeof pitchVideoSchema>;

// Total = sum of scene durations minus the overlap consumed by each transition.
export const totalDuration = (scenes: Scene[]) =>
  scenes.reduce((s, x) => s + x.durationInFrames, 0) -
  Math.max(0, scenes.length - 1) * TD;

const sizeFor = (text: string) => {
  const n = text.length;
  if (n <= 24) return 142;
  if (n <= 40) return 118;
  if (n <= 60) return 100;
  return 86;
};

// Kinetic typography: words fly up + fade in one after another; highlighted
// words land in gold with a little pop.
const Words: React.FC<{ text: string; highlight?: string; size: number }> = ({
  text,
  highlight,
  size,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const words = text.split(" ");
  const hl = new Set((highlight ?? "").split(" ").map((w) => w.toLowerCase()));
  const clean = (w: string) => w.replace(/[^a-zA-Z0-9%$]/g, "").toLowerCase();
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        rowGap: 6,
        columnGap: "0.28em",
        maxWidth: 980,
        fontFamily: FONT,
        fontWeight: 800,
        fontSize: size,
        lineHeight: 1.08,
        letterSpacing: -2,
        textAlign: "center",
        textShadow: "0 8px 50px rgba(0,0,0,0.6)",
      }}
    >
      {words.map((w, i) => {
        const delay = 4 + i * 3;
        const s = spring({ frame: frame - delay, fps, config: { damping: 14, stiffness: 130, mass: 0.7 } });
        const o = interpolate(frame, [delay, delay + 9], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const ty = interpolate(s, [0, 1], [46, 0]);
        const gold = hl.has(clean(w));
        const pop = gold ? interpolate(s, [0, 1], [0.85, 1]) : 1;
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: o,
              transform: `translateY(${ty}px) scale(${pop})`,
              color: gold ? BRAND.gold : BRAND.white,
            }}
          >
            {w}
          </span>
        );
      })}
    </div>
  );
};

const TypeScene: React.FC<{ scene: Scene }> = ({ scene }) => (
  <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 80 }}>
    <Words text={scene.text ?? ""} highlight={scene.highlight} size={sizeFor(scene.text ?? "")} />
  </AbsoluteFill>
);

// Cinematic image scene: slow Ken Burns zoom under a dark scrim + kinetic text.
const HeroScene: React.FC<{ scene: Scene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const scale = interpolate(frame, [0, durationInFrames], [1.12, 1.24]);
  const drift = interpolate(frame, [0, durationInFrames], [0, -28]);
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black, overflow: "hidden" }}>
      <Img
        src={staticFile(scene.image ?? "hero-hcm.webp")}
        style={{
          position: "absolute",
          width: "120%",
          height: "120%",
          left: "-10%",
          top: "-10%",
          objectFit: "cover",
          transform: `scale(${scale}) translateY(${drift}px)`,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(7,7,7,0.45) 0%, rgba(7,7,7,0.35) 45%, rgba(7,7,7,0.82) 100%)",
        }}
      />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 80 }}>
        {scene.eyebrow ? (
          <div
            style={{
              fontFamily: FONT,
              color: BRAND.gold,
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: 5,
              textTransform: "uppercase",
              marginBottom: 34,
              opacity: interpolate(frame, [6, 22], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            }}
          >
            {scene.eyebrow}
          </div>
        ) : null}
        <Words text={scene.text ?? ""} highlight={scene.highlight} size={sizeFor(scene.text ?? "")} />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// Motion-graphic stat: a big number counts up with a filling gold bar.
const StatScene: React.FC<{ scene: Scene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const prog = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 42 });
  const val = Math.round(interpolate(prog, [0, 1], [0, scene.value ?? 0]));
  const o = interpolate(frame, [2, 16], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const display = `${scene.prefix ?? ""}${val.toLocaleString("en-US")}${scene.suffix ?? ""}`;
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: o }}>
      <div style={{ textAlign: "center", fontFamily: FONT }}>
        <div
          style={{
            color: BRAND.gold,
            fontSize: 320,
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: -8,
            fontVariantNumeric: "tabular-nums",
            textShadow: "0 0 70px rgba(236,172,96,0.45)",
          }}
        >
          {display}
        </div>
        <div
          style={{
            height: 10,
            width: 560,
            margin: "44px auto 0",
            background: "rgba(255,255,255,0.12)",
            borderRadius: 6,
            overflow: "hidden",
          }}
        >
          <div style={{ height: "100%", width: `${prog * 100}%`, background: BRAND.gold }} />
        </div>
        <div
          style={{
            color: BRAND.white,
            fontSize: 60,
            fontWeight: 800,
            marginTop: 40,
            letterSpacing: -1,
          }}
        >
          {scene.label}
        </div>
      </div>
    </AbsoluteFill>
  );
};

const BrandScene: React.FC<{ scene: Scene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 14, stiffness: 90 } });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: "center", transform: `translateY(${interpolate(s, [0, 1], [40, 0])}px)`, opacity: interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" }) }}>
        <Img
          src={staticFile(LOGO)}
          style={{
            width: 300,
            height: 300,
            objectFit: "contain",
            transform: `scale(${interpolate(s, [0, 1], [0.6, 1])})`,
            filter: "drop-shadow(0 0 50px rgba(236,172,96,0.4))",
            marginBottom: 26,
          }}
        />
        <div style={{ height: 6, width: interpolate(s, [0, 1], [0, 280]), background: BRAND.gold, margin: "0 auto 38px", borderRadius: 4 }} />
        <div style={{ fontFamily: FONT, color: BRAND.white, fontSize: 90, fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.05 }}>
          {scene.text}
        </div>
        {scene.url ? (
          <div style={{ fontFamily: FONT, color: BRAND.gold, fontSize: 58, fontWeight: 700, marginTop: 34, letterSpacing: 1 }}>
            {scene.url}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};

const SceneSwitch: React.FC<{ scene: Scene }> = ({ scene }) => {
  if (scene.type === "hero") return <HeroScene scene={scene} />;
  if (scene.type === "stat") return <StatScene scene={scene} />;
  if (scene.type === "brand") return <BrandScene scene={scene} />;
  return <TypeScene scene={scene} />;
};

// --- global luxury overlays --------------------------------------------------
const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const x = 50 + 16 * Math.sin((frame / durationInFrames) * Math.PI * 2);
  const y = 44 + 12 * Math.cos((frame / durationInFrames) * Math.PI * 2 * 0.8);
  const pulse = 0.2 + 0.05 * Math.sin(frame / 18);
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at ${x}% ${y}%, rgba(236,172,96,${pulse}) 0%, rgba(236,172,96,0.03) 40%, ${BRAND.black} 74%)`,
      }}
    />
  );
};
const Vignette: React.FC = () => (
  <AbsoluteFill
    style={{
      pointerEvents: "none",
      background: "radial-gradient(circle at 50% 46%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.55) 100%)",
    }}
  />
);
const Bezel: React.FC = () => (
  <div
    style={{
      position: "absolute",
      inset: 34,
      border: "2px solid rgba(236,172,96,0.5)",
      pointerEvents: "none",
    }}
  />
);
const TopLogo: React.FC = () => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [8, 26], [0, 0.95], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <Img
      src={staticFile(LOGO)}
      style={{ position: "absolute", top: 120, left: "50%", transform: "translateX(-50%)", width: 92, height: 92, objectFit: "contain", opacity: o }}
    />
  );
};
const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const w = interpolate(frame, [0, durationInFrames], [0, 100], { extrapolateRight: "clamp" });
  return <div style={{ position: "absolute", bottom: 0, left: 0, height: 12, width: `${w}%`, background: BRAND.gold }} />;
};

const presentationFor = (i: number) =>
  i % 3 === 1 ? slide({ direction: "from-right" }) : fade();

export const PitchVideo: React.FC<PitchVideoProps> = ({ scenes }) => {
  const { durationInFrames } = useVideoConfig();
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.black }}>
      <Background />
      <Audio src={staticFile(MUSIC)} volume={0.7} endAt={durationInFrames} />
      <TransitionSeries>
        {scenes.flatMap((scene, i) => {
          const seq = (
            <TransitionSeries.Sequence key={`s${i}`} durationInFrames={scene.durationInFrames}>
              <SceneSwitch scene={scene} />
            </TransitionSeries.Sequence>
          );
          if (i === scenes.length - 1) return [seq];
          return [
            seq,
            <TransitionSeries.Transition
              key={`t${i}`}
              presentation={presentationFor(i)}
              timing={linearTiming({ durationInFrames: TD })}
            />,
          ];
        })}
      </TransitionSeries>
      <Vignette />
      <Bezel />
      <TopLogo />
      <ProgressBar />
    </AbsoluteFill>
  );
};

// --- HCM Software pillar page (VIDEO-FRAMEWORK.md §3, approved v2 voice) ------
export const hcmScenes: Scene[] = [
  { type: "hero", eyebrow: "HCM Software · iSolved Partner", text: "You're here looking at HCM software.", highlight: "HCM software", durationInFrames: 92 },
  { type: "type", text: "So can we ask —", durationInFrames: 50 },
  { type: "type", text: "what's making you look right now?", highlight: "right now", durationInFrames: 80 },
  { type: "type", text: "Is it the payroll that never quite reconciles?", highlight: "payroll", durationInFrames: 92 },
  { type: "type", text: "Four logins just to get one answer?", highlight: "Four logins", durationInFrames: 88 },
  { type: "type", text: "Or a feeling this should be easier?", highlight: "easier", durationInFrames: 90 },
  { type: "type", text: "Most teams can't name it. They just know it's costing time.", highlight: "costing time", durationInFrames: 116 },
  { type: "type", text: "If nothing changes — what does that cost a year from now?", highlight: "a year from now", durationInFrames: 120 },
  { type: "hero", eyebrow: "One Connected Platform", text: "That's what iSolved People Cloud, set up by BEG, solves.", highlight: "iSolved People Cloud", durationInFrames: 112 },
  { type: "stat", value: 330, suffix: "%", label: "documented ROI · Forrester", durationInFrames: 116 },
  { type: "type", text: "No pitch. Just a conversation to see if it fits.", highlight: "Just a conversation", durationInFrames: 104 },
  { type: "brand", text: "Business Executive Group", url: "beghr.com", durationInFrames: 104 },
];

// --- Job Placement pillar page (Video Director scenario, curiosity-first) ----
export const jobScenes: Scene[] = [
  { type: "type", text: "That seat has been empty too long.", highlight: "empty too long", durationInFrames: 96 },
  { type: "type", text: "So can we ask —", durationInFrames: 48 },
  { type: "type", text: "how long has that role actually been open?", highlight: "actually been open", durationInFrames: 92 },
  { type: "type", text: "And who's absorbing the work while it sits there?", highlight: "absorbing the work", durationInFrames: 100 },
  { type: "stat", value: 8000, prefix: "$", suffix: "+", label: "per week, in lost output", durationInFrames: 118 },
  { type: "type", text: "Here's the catch: the best people for it aren't even looking.", highlight: "aren't even looking", durationInFrames: 116 },
  { type: "type", text: "Employed, passive, off the job boards. We reach them directly.", highlight: "reach them directly", durationInFrames: 116 },
  { type: "stat", value: 86, suffix: "%", label: "fill rate · filled in 23–35 days", durationInFrames: 116 },
  { type: "type", text: "Roughly half what contingency charges — with a 45-day guarantee.", highlight: "45-day guarantee", durationInFrames: 112 },
  { type: "type", text: "No pressure. Just a conversation about the seat you need filled.", highlight: "Just a conversation", durationInFrames: 108 },
  { type: "brand", text: "Business Executive Group", url: "beghr.com", durationInFrames: 104 },
];
