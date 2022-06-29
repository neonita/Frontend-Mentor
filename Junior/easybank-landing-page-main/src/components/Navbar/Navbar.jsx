import Button from "../Button/Button";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
import Logo from ".././Logo/Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__logo}>
          <a href="/">
            <Logo />
          </a>
        </h1>

        <Navigation />

        <div className={styles.header__btn}>
          <Button />
        </div>

        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
