import { useState } from "react";
import Button from "../Button/Button";
import { IconHamburger, IconClose } from "../../assets/icons";
import styles from "./MobileToggle.module.css";

const MobileToggle = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <>
      <div className={styles.icon__container} onClick={() => setOpen(!open)}>
        {!open ? (
          <IconHamburger />
        ) : (
          <div className={styles.iconClose}>
            <IconClose />
          </div>
        )}
      </div>

      <nav className={styles.nav}>
        {/* component start */}
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <a href="/" className={styles.list__link}>
              Home
            </a>
          </li>
          <li className={styles.list__item}>
            <a href="/" className={styles.list__link}>
              About
            </a>
          </li>
          <li className={styles.list__item}>
            <a href="/" className={styles.list__link}>
              Contact
            </a>
          </li>
          <li className={styles.list__item}>
            <a href="/" className={styles.list__link}>
              Blog
            </a>
          </li>
          <li className={styles.list__item}>
            <a href="/" className={styles.list__link}>
              Careers
            </a>
          </li>
        </ul>
        {/* component end */}

        <Button />
      </nav>
    </>
  );
};

export default MobileToggle;
