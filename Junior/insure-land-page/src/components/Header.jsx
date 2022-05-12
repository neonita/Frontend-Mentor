import React, { useState } from "react";
import { GrMenu, GrClose } from "react-icons/gr";
import MobileNavPattern from "../assets/images/bg-pattern-mobile-nav.svg";
import Logo from "./Logo";

// const handleMenu = () => {
//   setMenu(!menu);
// }

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="flex items-center justify-between p-5 md:px-12 lg:px-20 xl:px-40 h-16 relative top-0 left-0 w-full bg-white border-b border-b-zinc-200">
      <h1 className="sr-only absolute top-[-100%] left-1000">Insure</h1>
      <a href="/">
        <Logo />
      </a>

      <nav className="hidden md:block uppercase">
        <ul className="w-[400px] h-10 flex items-center justify-between text-[14px] font-bold">
          <li>
            <a
              className="text-neutralGrayViolet hover:text-neutralViolet transition ease-in-out duration-300"
              href="/"
            >
              How we work
            </a>
          </li>
          <li>
            <a
              className="text-neutralGrayViolet hover:text-neutralViolet transition ease-in-out duration-300"
              href="/"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="text-neutralGrayViolet hover:text-neutralViolet transition ease-in-out duration-300"
              href="/"
            >
              Account
            </a>
          </li>
          <li className="flex items-center px-6 border-2 border-neutralViolet h-full transition ease-in-out duration-300 group hover:bg-neutralViolet">
            <a
              className="text-neutralViolet transition ease-in-out duration-300 group-hover:text-neutralGray"
              href="/"
            >
              View plans
            </a>
          </li>
        </ul>
      </nav>
      {/* Mobile menu icon */}
      <div
        className="md:hidden border-[1.8px] border-primaryViolet p-1"
        onClick={() => setMenu(!menu)}
      >
        {!menu ? (
          <GrMenu className="cursor-pointer w-4 h-4 fill-primaryViolet transition ease-in-out duration-150" />
        ) : (
          <GrClose className="cursor-pointer w-4 h-4 fill-primaryViolet transition ease-in-out duration-150" />
        )}
      </div>

      {/* Mobile menu Links */}
      <div
        className={
          !menu
            ? "md:hidden fixed top-[-100%] transition ease-in-out duration-500"
            : "md:hidden fixed top-16 left-0 z-50 w-full nav-container bg-neutralViolet transition ease-in-out duration-500 pt-14"
        }
      >
        <ul className="uppercase text-neutralGray text-center flex flex-col gap-5 text-2xl mx-7">
          <li className="w-[100%] py-2 hover:border border-neutralGray transition ease-in-out duration-150">
            <a href="/">How we work</a>
          </li>
          <li className="w-[100%] py-2 hover:border border-neutralGray transition ease-in-out duration-150">
            <a href="/">Blog</a>
          </li>
          <li className="w-[100%] py-2 hover:border border-neutralGray transition ease-in-out duration-150">
            <a href="/">Account</a>
          </li>
          <li className="w-[100%] py-2 hover:border border-neutralGray transition ease-in-out duration-150">
            <a href="/">View plans</a>
          </li>
        </ul>
        <img
          className="absolute bottom-0 right-0 w-full h-auto"
          src={MobileNavPattern}
          alt="Mobile background pattern of navigation menu"
        />
      </div>
    </header>
  );
};

export default Header;
