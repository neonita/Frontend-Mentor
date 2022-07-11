import { useState } from "react";
import Button from "../Button/Button";
import { IconHamburger, IconClose } from "../../assets/icons";
import styles from "./MobileNavbar.module.css";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.MobileNavbar}>
      <div className={styles.icon__container} onClick={() => setOpen(!open)}>
        {!open ? (
          <IconHamburger />
        ) : (
          <div className={styles.closeIcon}>
            <IconClose />
          </div>
        )}
      </div>

      {!open ? null : (
        <div className={styles.nav__container}>
          <NavLinks />

          <Button />
        </div>
      )}
    </div>
  );
};

export default Navbar;
