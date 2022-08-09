import { useState } from "react";

const Links = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Url to shorten: ${url}`);
  };

  const updateUrl = (e) => {
    setUrl(e.target.value);
    console.log(e);
  };

  return (
    <section className="links">
      <div className="links__container">
        {/* <div className="container"> */}
        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          <input
            type="url"
            placeholder="Shorten a link here..."
            onChange={updateUrl}
            required
          />

          <input type="submit" value="Shorten It!" />
        </form>

        {/* Results */}
        <div className="results">
          <div className="results__result">
            <p>http://www.frontendmentor.io</p>
            <p>https://rel.ink/k4lKyk</p>
            <button>Copy</button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Links;
