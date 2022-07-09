import { useState } from "react";
import Logo from "../Logo/Logo";
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
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
