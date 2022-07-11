import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import Navigation from "./Navigation";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.logo__container}>
          <a href="/">
            <Logo fill="#2d314d" />
          </a>
        </h1>

        {/* <div className={styles.nav__container}> */}
        <Navigation />
        {/* </div> */}

        <div className={styles.btn}>
          <Button />
        </div>

        <MobileNavbar />
      </div>
    </header>
  );
};

export default Navbar;
