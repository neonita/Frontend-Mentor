import { useState } from "react";
import NavLinks from "./NavLinks";

const MobileToggle = () => {
  const [open, setOpen] = useState(false);
  console.log(open);

  const openMenu = () => {
    setOpen(!open);
    console.log("clicked");
  };
  return (
    <div className="mobiletoggle">
      {/* Hamburger menu */}
      <div
        className={
          !open ? "mobiletoggle__hamburger" : "mobiletoggle__hamburger--open"
        }
        onClick={openMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <menu
        className={
          !open
            ? "mobiletoggle__menu"
            : "mobiletoggle__menu mobiletoggle__menu--open "
        }
      >
        <NavLinks />
      </menu>
    </div>
  );
};

export default MobileToggle;
