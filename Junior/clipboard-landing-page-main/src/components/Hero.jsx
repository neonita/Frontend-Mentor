import Logo from "../assets/icons/logo.svg";

const Hero = () => {
  return (
    <section className="hero flex flex-jc-sb flex-col flex-ai-center section-p-mobile">
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

      <div className="hero__btns flex flex-jc-center flex-ai-center flex-col">
        <a href="/" className="btn btn__primary">
          Download for iOS
        </a>{" "}
        <br />
        <a href="/" className="btn btn__secondary">
          Download for Mac
        </a>
      </div>
    </section>
  );
};

export default Hero;
