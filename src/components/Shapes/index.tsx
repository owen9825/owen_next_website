import s from "./styles.module.scss";

/* Floating vaporwave collage shapes. All purely decorative. */

export const HoloOrb = ({ className = "" }: { className?: string }) => (
  <div aria-hidden="true" className={`${s.holoOrb} ${s.float} ${className}`} />
);

export const Squiggle = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 80 150" className={`${s.squiggle} ${s.float} ${className}`}>
    <defs>
      <linearGradient id="squiggle-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#8fe3d3" />
        <stop offset="1" stopColor="#5cc9c0" />
      </linearGradient>
    </defs>
    <path d="M40 6 C64 18 62 40 36 52 C10 64 14 86 42 96 C68 106 64 128 36 144" fill="none" stroke="url(#squiggle-grad)" strokeWidth="14" strokeLinecap="round" />
    {/* glitter */}
    <path d="M40 6 C64 18 62 40 36 52 C10 64 14 86 42 96 C68 106 64 128 36 144" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="0.1 7" opacity="0.85" />
  </svg>
);

export const Pyramid = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 120 120" className={`${s.pyramid} ${s.float} ${className}`}>
    <defs>
      <linearGradient id="pyr-left" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#7ef3d6" />
        <stop offset="1" stopColor="#a8d8f8" />
      </linearGradient>
      <linearGradient id="pyr-right" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f7a8dc" />
        <stop offset="1" stopColor="#c8a8f4" />
      </linearGradient>
    </defs>
    <polygon points="60,6 10,64 60,114" fill="url(#pyr-left)" />
    <polygon points="60,6 110,64 60,114" fill="url(#pyr-right)" />
    <polygon points="60,6 10,64 60,78 110,64" fill="white" opacity="0.25" />
  </svg>
);

export const WireOctahedron = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 120 120" className={`${s.wire} ${s.float} ${className}`}>
    <g fill="none" stroke="#a03ce0" strokeWidth="3" strokeLinejoin="round">
      <polygon points="60,6 112,52 60,114 8,52" />
      <polyline points="8,52 44,66 112,52" />
      <polyline points="60,6 44,66 60,114" />
      <polyline points="8,52 78,40 112,52" opacity="0.45" />
      <polyline points="60,6 78,40 60,114" opacity="0.45" />
    </g>
  </svg>
);

export const Bolt = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 70 100" className={`${s.bolt} ${s.float} ${className}`}>
    <defs>
      <linearGradient id="bolt-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#7ef3d6" />
        <stop offset="1" stopColor="#5b8cf5" />
      </linearGradient>
    </defs>
    <polygon points="44,2 8,56 32,56 20,98 64,38 40,38 54,2" fill="#f7a8dc" transform="translate(5 4)" />
    <polygon points="44,2 8,56 32,56 20,98 64,38 40,38 54,2" fill="url(#bolt-grad)" />
  </svg>
);

export const HoloTriangle = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 120 110" className={`${s.holoTriangle} ${s.float} ${className}`}>
    <defs>
      <linearGradient id="holo-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#c8a8f4" />
        <stop offset="0.35" stopColor="#fbd3e6" />
        <stop offset="0.6" stopColor="#8fe3d3" />
        <stop offset="1" stopColor="#b9a3f5" />
      </linearGradient>
    </defs>
    <polygon points="6,6 114,58 6,104" fill="url(#holo-grad)" opacity="0.9" />
    <polygon points="6,6 60,40 6,58" fill="white" opacity="0.3" />
    <polygon points="6,58 60,40 114,58 50,82" fill="white" opacity="0.15" />
  </svg>
);

/** Glowing neon cyan triangle, as seen framing the dragon in the reference */
export const NeonTriangle = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 200 180" className={`${s.neonTriangle} ${className}`}>
    <polygon points="70,10 192,150 8,172" fill="none" stroke="#7ef3ff" strokeWidth="7" strokeLinejoin="round" />
  </svg>
);

/** Pink perspective grid that recedes towards a vanishing point */
export const GridFloor = ({ className = "" }: { className?: string }) => (
  <div aria-hidden="true" className={`${s.gridWrap} ${className}`}>
    <div className={s.grid} />
  </div>
);
