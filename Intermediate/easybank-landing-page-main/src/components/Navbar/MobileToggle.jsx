import { useState } from "react";
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
    </>
  );
};

export default MobileToggle;
