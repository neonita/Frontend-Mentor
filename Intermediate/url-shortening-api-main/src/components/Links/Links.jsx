import { useState } from "react";
import Result from "./Result";

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

        <Result className="result" />
        {/* Results */}
        {/* <div className="results"> */}
        {/* <Result /> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Links;
