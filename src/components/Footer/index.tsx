import s from "./styles.module.scss";

/** A pastel desktop taskbar */
const Footer = () => (
    <footer className={s.taskbar}>
        <span className={s.start} aria-hidden="true">
            <span className={s.startLogo}>✿</span> Start
        </span>
        <span className={s.copyright}>© Owen Miller {(new Date()).getFullYear()}</span>
        <span className={s.tray}>
            <span aria-hidden="true">♡ ☁ ✧</span>
            <span>Naarm / Melbourne</span>
        </span>
    </footer>
);

export default Footer;
