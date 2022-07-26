import Logo from "../assets/icons/logo.svg";
import Buttons from "./Buttons";

const Hero = () => {
  return (
    <section className="hero flex flex-jc-sb flex-col flex-ai-center padding--x padding--y">
      <div className="hero__bg"></div>
      <div className="hero__logo">
        <img src={Logo} alt="Clipboard Logo" />
      </div>
      <div className="hero__text">
        <h1 className="h-1">A history of everything you copy</h1>
        <p className="txt txt-1">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>
      <Buttons />
    </section>
  );
};

export default Hero;
