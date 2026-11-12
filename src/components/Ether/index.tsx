import s from "./styles.module.scss";

/**
 * The fixed backdrop: a luminous lavender gradient with soft glows of
 * blush and periwinkle that drift very slowly.
 */
const Ether = () => (
  <div className={s.ether} aria-hidden="true">
    <div className={`${s.glow} ${s.glowBlue}`} />
    <div className={`${s.glow} ${s.glowPink}`} />
    <div className={`${s.glow} ${s.glowLilac}`} />
  </div>
);

export default Ether;
