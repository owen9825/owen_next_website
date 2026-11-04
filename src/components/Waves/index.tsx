import s from "./styles.module.scss";

interface WavesProps {
  /** "band" is a horizontal divider; "backdrop" fills its positioned parent */
  variant?: "band" | "backdrop";
  className?: string;
}

/** Drifting pastel wavy stripes */
const Waves = ({ variant = "band", className = "" }: WavesProps) => (
  <div aria-hidden="true" className={`${s.waves} ${s[variant]} ${className}`} />
);

export default Waves;
