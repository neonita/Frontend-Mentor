import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import MobileToggle from "./MobileToggle";

const Header = () => {
  return (
    <header className="header padding-x">
      {/* Screen reader only */}
      <h1>Shortly</h1>

      {/* Logo */}
      <a href="/" className="header__logo-container">
        <Logo className="logo" />
      </a>

      <MobileToggle />
    </header>
  );
};

export default Header;
