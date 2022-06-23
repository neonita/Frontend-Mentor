import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <ul className={styles.nav__ul}>
      <div
        className={styles.nav__menuBg}
        data-aos="fade-down"
        data-aos-duration="500"
      >
        <li className={styles.nav__item}>
          <a href="/" className={styles.nav__link}>
            Home
          </a>
        </li>
        <li className={styles.nav__item}>
          <a href="/" className={styles.nav__link}>
            About
          </a>
        </li>
        <li className={styles.nav__item}>
          <a href="/" className={styles.nav__link}>
            Contact
          </a>
        </li>
        <li className={styles.nav__item}>
          <a href="/" className={styles.nav__link}>
            Blog
          </a>
        </li>
        <li className={styles.nav__item}>
          <a href="/" className={styles.nav__link}>
            Careers
          </a>
        </li>
      </div>
    </ul>
  );
};

export default NavLinks;
