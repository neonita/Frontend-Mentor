import React from "react";
import styles from "./Navigation.module.css";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
