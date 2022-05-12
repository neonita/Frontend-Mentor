import React, { useState } from "react";
import { GrMenu, GrClose } from "react-icons/gr";
import MobileNavPattern from "../assets/images/bg-pattern-mobile-nav.svg";

const Logo = () => (
  <svg
    className="fill-primaryViolet w-"
    xmlns="http://www.w3.org/2000/svg"
    width="112"
    height="18"
  >
    <path d="M0 .224h3.578v17.53H0V.223zm8.086 0h3.555l10.923 5.72V.224h3.556v17.53h-3.556V9.711L11.641 4.026v13.727H8.086V.224zm23.81 12.314c.635.36 1.28.683 1.934.97.654.288 1.333.531 2.035.73.703.198 1.442.349 2.215.454.774.104 1.599.157 2.473.157 1.054 0 1.952-.07 2.692-.208.74-.138 1.344-.329 1.811-.572.467-.243.808-.533 1.02-.869.214-.336.32-.703.32-1.1 0-.635-.265-1.137-.796-1.507-.53-.37-1.35-.556-2.456-.556-.486 0-.998.032-1.537.096l-.811.1-.82.107a97.03 97.03 0 01-1.626.208c-.535.063-1.038.095-1.509.095-.785 0-1.538-.1-2.26-.303a5.98 5.98 0 01-1.917-.908 4.5 4.5 0 01-1.33-1.514c-.328-.606-.493-1.312-.493-2.12 0-.478.066-.953.196-1.424.131-.471.34-.922.628-1.352.288-.43.66-.83 1.116-1.2a6.682 6.682 0 011.655-.958c.646-.27 1.394-.48 2.243-.634.848-.153 1.814-.23 2.899-.23.785 0 1.573.043 2.366.129.792.086 1.564.207 2.316.364.751.157 1.475.346 2.17.567.695.22 1.342.465 1.94.734l-1.559 2.871a16.689 16.689 0 00-1.592-.6 18.789 18.789 0 00-1.783-.476 20.428 20.428 0 00-1.924-.32 17.169 17.169 0 00-2.024-.118c-.98 0-1.785.071-2.417.213-.632.143-1.135.324-1.508.544-.374.221-.634.468-.78.74a1.714 1.714 0 00-.219.814c0 .523.236.951.707 1.284.471.333 1.189.499 2.153.499.39 0 .836-.028 1.34-.084l.777-.089.816-.096a72.218 72.218 0 011.705-.185c.58-.056 1.142-.084 1.688-.084 1.031 0 1.945.115 2.742.347.796.232 1.463.563 2.001.993.539.43.946.95 1.223 1.559.277.609.415 1.291.415 2.046 0 1.01-.234 1.909-.701 2.698-.467.788-1.133 1.454-1.996 1.996-.864.542-1.905.953-3.124 1.233-1.218.28-2.575.421-4.07.421-.988 0-1.952-.062-2.894-.185a21.57 21.57 0 01-2.709-.527 20.3 20.3 0 01-2.467-.819A17.998 17.998 0 0130 15.421l1.895-2.883zM53.382.224h3.555V9.88c0 .793.109 1.498.326 2.114.216.617.54 1.139.97 1.565.43.426.962.75 1.598.97.635.22 1.375.33 2.22.33.838 0 1.576-.11 2.215-.33.64-.22 1.174-.544 1.604-.97.43-.426.753-.948.97-1.565.217-.616.325-1.321.325-2.114V.224h3.555v10.083c0 1.15-.194 2.198-.583 3.14a6.668 6.668 0 01-1.693 2.422c-.74.673-1.647 1.193-2.72 1.559-1.073.366-2.297.55-3.673.55-1.375 0-2.6-.184-3.673-.55-1.072-.366-1.979-.886-2.72-1.559a6.668 6.668 0 01-1.693-2.422c-.388-.942-.583-1.99-.583-3.14V.224zm21.667 0h8.916c1.346 0 2.513.14 3.5.42.986.281 1.805.687 2.455 1.218a4.907 4.907 0 011.453 1.94c.318.762.476 1.626.476 2.59 0 .651-.078 1.27-.235 1.857a5.512 5.512 0 01-.723 1.62 5.526 5.526 0 01-1.228 1.318 6.677 6.677 0 01-1.739.959l3.813 5.607h-4.351l-3.297-4.98-5.484-.01v4.99H75.05V.224zm9.006 9.466c.673 0 1.262-.079 1.766-.236.505-.157.928-.377 1.268-.661.34-.285.594-.63.762-1.038a3.54 3.54 0 00.253-1.362c0-.98-.337-1.737-1.01-2.272-.673-.534-1.686-.801-3.039-.801h-5.45v6.37h5.45zm12-9.466h14.927v3.118H99.611v3.5h10.071v2.926h-10.07v4.879h11.607v3.106H96.056V.224z" />
  </svg>
);

// const handleMenu = () => {
//   setMenu(!menu);
// }

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="flex items-center justify-between p-5 md:px-12 lg:px-20 xl:px-40 h-16 relative top-0 left-0 w-full bg-white border-b border-b-zinc-200">
      <h1 className="sr-only absolute top-[-100%] left-1000">Insure</h1>
      <a href="/">
        <Logo width={10} height={10} />
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
