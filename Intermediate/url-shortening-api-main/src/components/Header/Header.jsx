import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Header = () => {
  const [open, isOpen] = useState(!open);
  console.log(open);

  return (
    <header className="header">
      {/* Screen reader only */}
      <h1>Shortly</h1>

      {/* Logo */}
      <div className="header__logo-container">
        <Logo className="logo" />
      </div>

      {/* Hamburger menu */}
      <div className="header__hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
