import { Logo2 } from ".././Logo";
import {
  FbIcon,
  YtIcon,
  TwIcon,
  PinIcon,
  IgIcon,
} from "../../assets/icons-socials";
import Button from ".././Button/Button";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <section className={styles.left}>
          <Logo2 className={styles.logo} />

          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FbIcon />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YtIcon />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwIcon />
            </a>
            <a href="pinterest.ca" target="_blank" rel="noopener noreferrer">
              <PinIcon />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IgIcon />
            </a>
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
            <a href="/" className={styles.link}>
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="/" className={styles.link}>
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
