import { useState } from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { IconHamburger, IconClose } from "../../assets/icons";
import styles from "./MobileNavbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo__container}>
        <a href="/">
          <Logo color="#2d314d" />
        </a>
      </h1>

      <div className={styles.icon__container} onClick={() => setOpen(!open)}>
        {!open ? <IconHamburger /> : <IconClose />}
      </div>

      <div className={styles.nav__container}>
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

        <Button />
      </div>
    </header>
  );
};

export default Navbar;
