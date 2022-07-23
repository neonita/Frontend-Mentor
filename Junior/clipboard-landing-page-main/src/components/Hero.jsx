const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__logo"></div>
      <div className="hero__text">
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>

      <div className="flex flex-jc-center flex-ai-center flex-col">
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
