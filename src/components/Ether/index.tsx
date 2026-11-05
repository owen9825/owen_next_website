import s from "./styles.module.scss";

/**
 * The fixed, otherworldly backdrop: the cloudscape drifting very slowly,
 * a faint iridescent veil, and two banks of mist passing across it.
 */
const Ether = () => (
  <div className={s.ether} aria-hidden="true">
    <div className={s.sky} />
    <div className={s.veil} />
    <div className={`${s.mist} ${s.mistA}`} />
    <div className={`${s.mist} ${s.mistB}`} />
  </div>
);

export default Ether;
