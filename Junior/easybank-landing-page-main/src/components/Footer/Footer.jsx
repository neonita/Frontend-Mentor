import Logo2 from ".././Logo/Logo2";
import FbIcon from "../../assets/images/icon-facebook.svg";
import YtIcon from "../../assets/images/icon-youtube.svg";
import TwIcon from "../../assets/images/icon-twitter.svg";
import PinIcon from "../../assets/images/icon-pinterest.svg";
import IgIcon from "../../assets/images/icon-instagram.svg";
import Button from ".././Button/Button";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <section className={styles.left}>
          <Logo2 className={styles.logo} />

          <div className={styles.socials}>
            <a href="/" target="_blank" rel="noopener norefferer">
              <img src={FbIcon} alt="/" />
            </a>
            <a href="/" target="_blank" rel="noopener norefferer">
              <img src={YtIcon} alt="/" />
            </a>
            <a href="/" target="_blank" rel="noopener norefferer">
              <img src={TwIcon} alt="/" />
            </a>
            <a href="/" target="_blank" rel="noopener norefferer">
              <img src={PinIcon} alt="/" />
            </a>
            <a href="/" target="_blank" rel="noopener norefferer">
              <img src={IgIcon} alt="/" />
            </a>
            <a href="/" target="_blank" rel="noopener norefferer"></a>
          </div>
        </section>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="/" className={styles.link}>
                About Us
              </a>
            </li>
            <li className={styles.item}>
              <a href="/" className={styles.link}>
                Contact
              </a>
            </li>
            <li className={styles.item}>
              <a href="/" className={styles.link}>
                Blog
              </a>
            </li>
            <li className={styles.item}>
              <a href="/" className={styles.link}>
                Careers
              </a>
            </li>
            <li className={styles.item}>
              <a href="/" className={styles.link}>
                Support
              </a>
            </li>
            <li className={styles.item}>
              <a href="/" className={styles.link}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>

        <section className={styles.right}>
          <Button />
          <p className={styles.copyright}>© Easybank. All Rights Reserved</p>
          <p className={styles.attribution}>
            Challenge by{" "}
            <a href="/" className={styles.attribution_link}>
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="/" className={styles.attribution_link}>
              Neonita
            </a>
            .
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
