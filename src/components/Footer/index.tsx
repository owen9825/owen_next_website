import s from "./styles.module.scss";

const Footer = () => (
    <footer className={s.footer}>
        © Owen Miller {(new Date()).getFullYear()}
    </footer>
);

export default Footer;
