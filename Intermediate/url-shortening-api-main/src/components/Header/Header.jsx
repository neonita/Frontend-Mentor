import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import MobileToggle from "./MobileToggle";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="header padding-x">
      {/* Screen reader only */}
      <div className="container">
        <h1>Shortly</h1>

        {/* Logo */}
        <a href="/" className="header__logo-container">
          <Logo className="logo" />
        </a>

        {/* Desktop nav links */}
        <div className="header__navlinks">
          <NavLinks />
        </div>

        <MobileToggle />
      </div>
    </header>
  );
};

export default Header;
