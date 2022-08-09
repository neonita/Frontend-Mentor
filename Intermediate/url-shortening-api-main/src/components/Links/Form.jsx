import { useState } from "react";

const Form = () => {
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
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="url"
        placeholder="Shorten a link here..."
        onChange={updateUrl}
        required
      />
      <input type="submit" value="Shorten It!" />
    </form>
  );
};

export default Form;
