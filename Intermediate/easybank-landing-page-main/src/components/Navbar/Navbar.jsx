import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.logo__container}>
          <a href="/">
            <Logo fill="#2d314d" />
          </a>
        </h1>

        <nav className={styles.nav}>
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
        </nav>

        <div className={styles.btn}>
          <Button />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
