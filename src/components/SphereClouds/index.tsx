import type { CSSProperties } from "react";
import s from "./styles.module.scss";

// Each cloud is a soft pill with a few glossy spheres heaped on top.
// Puff positions are percentages of the cloud's width.
const puffs = [
  { left: 4, bottom: 6, size: 34 },
  { left: 22, bottom: 18, size: 46 },
  { left: 50, bottom: 10, size: 40 },
  { left: 70, bottom: 4, size: 26 },
];

const clouds = [
  { className: s.cloudA, duration: 19, delay: 0 },
  { className: s.cloudB, duration: 23, delay: -7 },
  { className: s.cloudC, duration: 17, delay: -12 },
];

/** Simplified clouds made of glossy spheres, bobbing very slowly behind the name */
const SphereClouds = () => (
  <div className={s.sky} aria-hidden="true">
    {clouds.map((cloud, i) => (
      <div
        key={i}
        className={`${s.cloud} ${cloud.className}`}
        style={{ animationDuration: `${cloud.duration}s`, animationDelay: `${cloud.delay}s` }}
      >
        {puffs.map((puff, j) => (
          <div
            key={j}
            className={s.puff}
            style={{ left: `${puff.left}%`, bottom: `${puff.bottom}%`, width: `${puff.size}%` } as CSSProperties}
          />
        ))}
        <div className={s.base} />
      </div>
    ))}
  </div>
);

export default SphereClouds;
