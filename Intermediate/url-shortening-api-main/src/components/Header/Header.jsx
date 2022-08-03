import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  const openMenu = () => {
    setOpen(!open);
    console.log("clicked");
  };

  return (
    <header className="header padding-x">
      {/* Screen reader only */}
      <h1>Shortly</h1>

      {/* Logo */}
      <a href="/" className="header__logo-container">
        <Logo className="logo" />
      </a>

      {/* Hamburger menu */}
      <div
        className={!open ? "header__hamburger" : "header__hamburger--open"}
        onClick={openMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
    </header>
  );
};

export default Header;
