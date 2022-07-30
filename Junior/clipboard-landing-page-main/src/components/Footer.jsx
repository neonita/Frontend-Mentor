import Logo from "../assets/icons/logo.svg";
import { ReactComponent as IconFacebook } from "../assets/icons/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../assets/icons/icon-twitter.svg";
import { ReactComponent as IconInstagram } from "../assets/icons/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer padding--x padding--y ">
      <div className="container flex flex-col flex-ai-center">
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
                <IconFacebook className="socialsIcon" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IconTwitter className="socialsIcon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <IconInstagram className="socialsIcon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
