import Logo2 from ".././Logo/Logo2";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo2 className={styles.logo} />
      <p className={styles.p}>I am a footer! 🌼</p>
    </footer>
  );
};

export default Footer;
