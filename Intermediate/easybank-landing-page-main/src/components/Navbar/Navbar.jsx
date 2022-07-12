import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import MobileToggle from "./MobileToggle";
import styles from "./Navbar.module.css";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__logo}>
          <a href="/" className={styles.logo__link}>
            <Logo fill="#2d314d" />
          </a>
        </h1>

        <nav className={styles.nav}>
          <NavLinks />
        </nav>

        <div className={styles.btn}>
          <Button />
        </div>

        <MobileToggle />
      </div>
    </header>
  );
};

export default Navbar;
