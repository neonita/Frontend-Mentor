import React from "react";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <ul className={styles.nav__list}>
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
    </ul>
  );
};

export default NavLinks;
