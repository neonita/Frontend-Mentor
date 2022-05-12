import Logo from "./Logo";
import PatternFooterMobile from "../assets/images/bg-pattern-footer-mobile.svg";
import PatternFooterDesktop from "../assets/images/bg-pattern-footer-desktop.svg";

const FBIcon = () => (
  <svg
    className="fill-[#837D88] hover:fill-primaryViolet hover:pointer-cursor transition ease-in-out duration-200"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
  >
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
  </svg>
);
const TwitterIcon = () => (
  <svg
    className="fill-[#837D88] hover:fill-primaryViolet hover:pointer-cursor transition ease-in-out duration-200"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="20"
  >
    <path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" />
  </svg>
);
const PinIcon = () => (
  <svg
    className="fill-[#837D88] hover:fill-primaryViolet hover:pointer-cursor transition ease-in-out duration-200"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
  >
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);
const IGIcon = () => (
  <svg
    className="fill-[#837D88] hover:fill-primaryViolet hover:pointer-cursor transition ease-in-out duration-200"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-neutralGray h-fit p-5 pt-28 md:px-12 lg:px-20 xl:px-40 relative">
      <img
        className="block md:hidden absolute top-0 left-0 z-0 w-full h-auto "
        src={PatternFooterMobile}
        alt="Mobile resolution of the footer's theme-pattern."
      />
      <img
        className="hidden md:block absolute top-0 left-0 z-0 w-full h-auto "
        src={PatternFooterDesktop}
        alt="Desktop resolution of the footer's theme-pattern."
      />

      {/* Footer's header */}
      <section className=" flex flex-col gap-8 items-center justify-center relative z-10">
        <a className="" href="/">
          <Logo />
        </a>

        <ul className="flex gap-4">
          <li>
            <a href="/">
              <FBIcon />
            </a>
          </li>
          <li>
            <a href="/">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="/">
              <PinIcon />
            </a>
          </li>
          <li>
            <a href="/">
              <IGIcon />
            </a>
          </li>
        </ul>

        <div className="h-[0.5px] w-full bg-[#837D88] opacity-30"></div>
      </section>

      {/* Links */}
      <section className="flex flex-col gap-6 items-center justify-center my-20 text-center uppercase">
        <div className="">
          <h5 className="text-neutralGrayViolet mb-6">Our company</h5>
          <ul className="flex flex-col gap-2">
            <li>
              <a className="hover:cursor-pointer hover:underline" href="/">
                How we work
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer hover:underline" href="/">
                Why insure?
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer hover:underline" href="/">
                Check price
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer hover:underline" href="/">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        <div className="">
          <h5 className="text-neutralGrayViolet mb-6">Help me</h5>
          <ul className="flex flex-col gap-2">
            <li>
              <a className="hover:cursor-pointer hover:underline" href="/">
                Faq
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer hover:underline" href="/">
                Terms of use
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer hover:underline" href="/">
                Privacy police
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer hover:underline" href="/">
                Cookies
              </a>
            </li>
          </ul>
        </div>

        <div className="">
          <h5 className="text-neutralGrayViolet mb-6">Contact</h5>
          <ul className="flex flex-col gap-2">
            <li>
              <a className="hover:cursor-pointer hover:underline" href="/">
                Sales
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer hover:underline" href="/">
                Support
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer hover:underline" href="/">
                Live chat
              </a>
            </li>
          </ul>
        </div>

        <div className="">
          <h5 className="text-neutralGrayViolet mb-6">Others</h5>
          <ul className="flex flex-col gap-2">
            <li>
              <a className="hover:cursor-pointer hover:underline" href="/">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer hover:underline" href="/">
                Press
              </a>
            </li>
            <li>
              <a className="hover:cursor-pointer hover:underline" href="/">
                Licenses
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
