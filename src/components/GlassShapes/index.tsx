import s from "./styles.module.scss";

/* Frosted, iridescent glass forms: a slowly turning cube, a sphere and a pyramid. */

export const GlassCube = ({ className = "" }: { className?: string }) => (
  <div aria-hidden="true" className={`${s.cubeScene} ${className}`}>
    <div className={s.cube}>
      <div className={`${s.face} ${s.front}`} />
      <div className={`${s.face} ${s.back}`} />
      <div className={`${s.face} ${s.right}`} />
      <div className={`${s.face} ${s.left}`} />
      <div className={`${s.face} ${s.top}`} />
      <div className={`${s.face} ${s.bottom}`} />
    </div>
  </div>
);

export const GlassSphere = ({ className = "" }: { className?: string }) => (
  <div aria-hidden="true" className={`${s.sphere} ${className}`} />
);

export const GlassPyramid = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 220 180" className={`${s.pyramid} ${className}`}>
    <defs>
      <linearGradient id="pyr-left-face" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="0.45" stopColor="#d9d2ff" stopOpacity="0.75" />
        <stop offset="1" stopColor="#9fb0ff" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="pyr-right-face" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffe3f3" stopOpacity="0.9" />
        <stop offset="0.5" stopColor="#ffb6dc" stopOpacity="0.7" />
        <stop offset="1" stopColor="#b7a6ff" stopOpacity="0.75" />
      </linearGradient>
      <linearGradient id="pyr-base" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#a9c8ff" stopOpacity="0.6" />
        <stop offset="0.5" stopColor="#ffd0ec" stopOpacity="0.7" />
        <stop offset="1" stopColor="#c7b5ff" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    <polygon points="110,8 12,138 96,172" fill="url(#pyr-left-face)" />
    <polygon points="110,8 96,172 208,128" fill="url(#pyr-right-face)" />
    <polygon points="12,138 96,172 208,128 120,110" fill="url(#pyr-base)" opacity="0.35" />
    <g fill="none" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="1.5" strokeLinejoin="round">
      <polyline points="12,138 110,8 208,128" />
      <line x1="110" y1="8" x2="96" y2="172" />
      <polyline points="12,138 96,172 208,128" strokeOpacity="0.6" />
    </g>
  </svg>
);
