import s from "./styles.module.scss";

/**
 * The fixed backdrop: a violet, fog-bound skyline that drifts almost
 * imperceptibly, with banks of fog passing in front of it.
 */
const Ether = () => (
  <div className={s.ether} aria-hidden="true">
    <div className={s.sky} />
    <div className={`${s.fog} ${s.fogA}`} />
    <div className={`${s.fog} ${s.fogB}`} />
  </div>
);

export default Ether;
