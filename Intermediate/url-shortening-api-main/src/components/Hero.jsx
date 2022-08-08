import { useState } from "react";

const Hero = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Url to shorten: ${url}`);
  };

  const updateUrl = (e) => {
    setUrl(e.target.value);
  };

  return (
    <section className="hero">
      <div className="hero__illustration"></div>

      <div className="hero__description">
        <h2>More than just shorter links</h2>
        <p className="txt txt-1">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>

      <div className="hero__submit">
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="Shorten a link here..."
            onChange={updateUrl}
          />
          <input type="submit" value="Shorten It!" />
        </form>
      </div>
    </section>
  );
};

export default Hero;
