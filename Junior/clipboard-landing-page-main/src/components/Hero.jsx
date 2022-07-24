import Logo from "../assets/icons/logo.svg";
import Buttons from "./Buttons";

const Hero = () => {
  return (
    <section className="hero flex flex-jc-sb flex-col flex-ai-center section-p">
      <div className="hero__logo">
        <img src={Logo} alt="Clipboard Logo" />
      </div>

      <div className="hero__text">
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>

      <Buttons />

      {/* <div className="hero__btns ">
        <a href="/" className="btn btn__primary">
          Download for iOS
        </a>{" "}
        <br />
        <a href="/" className="btn btn__secondary">
          Download for Mac
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
