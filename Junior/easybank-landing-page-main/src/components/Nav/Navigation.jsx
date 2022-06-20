import React from "react";
import "./Navbar.css";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <nav className="header__nav nav">
      <NavLinks />
    </nav>
  );
};

export default Navigation;
