import Logo from "../assets/icons/logo.svg";
import IconFacebook from "../assets/icons/icon-facebook.svg";
import IconTwitter from "../assets/icons/icon-twitter.svg";
import IconInstagram from "../assets/icons/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer padding--x padding--y flex flex-col flex-ai-center">
      <img src={Logo} alt="Clipboard logo" className="footer__logo" />

      <div className="footer__links">
        <ul className="flex flex-col flex-ai-center flex-jc-sb">
          <li>
            <a href="/" className="txt txt-4">
              FAQs
            </a>
          </li>
          <li>
            <a href="/" className="txt txt-4">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/" className="txt txt-4">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="txt txt-4">
              Press Kit
            </a>
          </li>
          <li>
            <a href="/" className="txt txt-4">
              Install Guide
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__socials">
        <ul className="flex flex-jc-sb">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={IconFacebook} alt="Facebook icon" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={IconTwitter} alt="Twitter icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={IconInstagram} alt="Instagram icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
