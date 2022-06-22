import { useState } from "react";
import NavLinks from "./NavLinks";
import Button from "../Button/Button";
import styles from "./MobileNav.module.css";

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11">
    <g fill="#2D314D" fillRule="evenodd">
      <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
    </g>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
    <g fill="#2D314D" fillRule="evenodd">
      <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
      <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
    </g>
  </svg>
);

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const toggle = open ? <CloseIcon /> : <MenuIcon />;
  const openMenu = open && (
    <>
      <NavLinks />
      <div className={styles.MobileNav__themeBtn}>
        <Button />
      </div>
    </>
  );
  console.log(open);

  return (
    <div className={styles.MobileNav}>
      <div
        className={styles.MobileNav__btn}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {toggle}
      </div>

      {openMenu}
    </div>
  );
};

export default MobileNav;
