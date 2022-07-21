// import "../sass/components";

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
      <a href="/" className="btn btn--primary">
        Download for iOS
      </a>
      <a href="/" className="btn btn--secondary">
        Download for Mac
      </a>
    </section>
  );
};

export default Hero;
