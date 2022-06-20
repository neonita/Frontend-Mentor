import React, { useState } from "react";
import Button from "../Button/Button";
import "./Navbar.css";
import NavLinks from "./NavLinks";

const NavMobile = () => {
  const [open, setOpen] = useState(false);

  const BurgerMenu = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="11"
      className="header__btn-mobile"
      onClick={() => {
        setOpen(!open);
        console.log(open);
      }}
    >
      <g fill="#2D314D" fillRule="evenodd">
        <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
      </g>
    </svg>
  );

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      className="header__btn-mobile"
      onClick={() => {
        setOpen(!open);
        console.log(open);
      }}
    >
      <g fill="#2D314D" fillRule="evenodd">
        <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
        <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
      </g>
    </svg>
  );

  return (
    <nav className="mobileNav">
      <div className="header__btn-mobile">
        {open ? <CloseIcon /> : <BurgerMenu />}
      </div>

      {open && (
        <div
          data-aos="fade-down"
          data-aos-duration="500"
          className="mobileNav__open"
        >
          <NavLinks />
          <Button />
        </div>
      )}
    </nav>
  );
};

export default NavMobile;
