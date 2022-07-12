import { useState } from "react";
import Button from "../Button/Button";
import { IconHamburger, IconClose } from "../../assets/icons";
import styles from "./MobileToggle.module.css";
import NavLinks from "./NavLinks";

const MobileToggle = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <>
      <div className={styles.icon__container} onClick={() => setOpen(!open)}>
        {open ? (
          <div className={styles.iconClose}>
            <IconClose />

            <nav className={styles.nav}>
              <NavLinks />
              <Button />
            </nav>
          </div>
        ) : (
          <IconHamburger />
        )}
      </div>

      {/* {open && (
        <nav className={styles.nav}>
          <NavLinks />
          <Button />
        </nav>
      )} */}
    </>
  );
};

export default MobileToggle;
