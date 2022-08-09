import { useState } from "react";
import Card from "./Card";

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

        <Card className="card" />
      </div>
    </section>
  );
};

export default Links;
