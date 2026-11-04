import type { CSSProperties } from "react";
import s from "./styles.module.scss";

// Positions are fixed (not random) so server and client renders match.
const clouds = [
  { top: "8%", left: "-6%", scale: 1.2, duration: 90 },
  { top: "34%", left: "60%", scale: 0.9, duration: 120 },
  { top: "62%", left: "5%", scale: 1.4, duration: 105 },
  { top: "82%", left: "70%", scale: 1.1, duration: 140 },
];

const bubbles = [
  { left: "6%", size: 46, delay: 0, duration: 26 },
  { left: "18%", size: 22, delay: 9, duration: 21 },
  { left: "33%", size: 64, delay: 4, duration: 32 },
  { left: "52%", size: 28, delay: 14, duration: 24 },
  { left: "68%", size: 52, delay: 2, duration: 29 },
  { left: "81%", size: 18, delay: 11, duration: 19 },
  { left: "92%", size: 38, delay: 6, duration: 27 },
];

const hearts = [
  { top: "14%", left: "88%", size: 34, delay: 0 },
  { top: "47%", left: "3%", size: 26, delay: 2 },
  { top: "71%", left: "93%", size: 22, delay: 4 },
  { top: "90%", left: "30%", size: 30, delay: 1 },
];

const sparkles = [
  { top: "6%", left: "42%", size: 18, delay: 0 },
  { top: "22%", left: "8%", size: 12, delay: 1.3 },
  { top: "30%", left: "76%", size: 16, delay: 2.1 },
  { top: "55%", left: "47%", size: 10, delay: 0.7 },
  { top: "64%", left: "88%", size: 14, delay: 1.8 },
  { top: "78%", left: "14%", size: 18, delay: 2.6 },
  { top: "94%", left: "62%", size: 12, delay: 0.4 },
];

export const Sparkle = ({ size = 16, className = "", style }: { size?: number; className?: string; style?: CSSProperties }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} style={style} aria-hidden="true">
    <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0Z" fill="white" />
  </svg>
);

const Heart = ({ size }: { size: number }) => (
  <svg viewBox="0 0 32 29" width={size} height={size} aria-hidden="true">
    <path
      d="M16 27 C6 19 2 14 2 9 C2 5 5 2 9 2 C12 2 14.5 3.6 16 6 C17.5 3.6 20 2 23 2 C27 2 30 5 30 9 C30 14 26 19 16 27Z"
      fill="rgba(255, 220, 240, 0.35)"
      stroke="white"
      strokeWidth="1.8"
    />
  </svg>
);

/**
 * The fixed, dreamy sky behind everything: drifting clouds, rising bubbles,
 * glassy hearts and twinkling sparkles.
 */
const Dreamscape = () => (
  <div className={s.dreamscape} aria-hidden="true">
    {clouds.map((c, i) => (
      <div
        key={`c${i}`}
        className={s.cloud}
        style={{ top: c.top, left: c.left, "--scale": c.scale, animationDuration: `${c.duration}s` } as CSSProperties}
      />
    ))}
    {bubbles.map((b, i) => (
      <div
        key={`b${i}`}
        className={s.bubble}
        style={{ left: b.left, width: b.size, height: b.size, animationDelay: `-${b.delay}s`, animationDuration: `${b.duration}s` }}
      />
    ))}
    {hearts.map((h, i) => (
      <div key={`h${i}`} className={s.heart} style={{ top: h.top, left: h.left, animationDelay: `-${h.delay}s` }}>
        <Heart size={h.size} />
      </div>
    ))}
    {sparkles.map((sp, i) => (
      <Sparkle
        key={`s${i}`}
        size={sp.size}
        className={s.sparkle}
        style={{ top: sp.top, left: sp.left, animationDelay: `${sp.delay}s` }}
      />
    ))}
  </div>
);

export default Dreamscape;
