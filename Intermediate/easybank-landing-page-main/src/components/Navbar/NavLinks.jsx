import React from "react";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <a href="/" className={styles.list__link}>
          Home
        </a>
      </li>
      <li className={styles.list__item}>
        <a href="/" className={styles.list__link}>
          About
        </a>
      </li>
      <li className={styles.list__item}>
        <a href="/" className={styles.list__link}>
          Contact
        </a>
      </li>
      <li className={styles.list__item}>
        <a href="/" className={styles.list__link}>
          Blog
        </a>
      </li>
      <li className={styles.list__item}>
        <a href="/" className={styles.list__link}>
          Careers
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
