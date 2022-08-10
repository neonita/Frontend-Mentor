import { useState } from "react";

const Form = () => {
  const [url, setUrl] = useState("");

  const convert = async (x) => {
    let response = await fetch(x);
    let data = await response.json();
    console.log(`${data.result.original_link}, ${data.result.short_link}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let apiBase = `https://api.shrtco.de/v2/shorten`;
    let link = `${apiBase}?url=${url}`;
    convert(link);
  };

  const getLink = (e) => {
    let inputLink = e.target.value;
    setUrl(inputLink); // sts inputted value to url
  };

  console.log(url);
  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="url"
        placeholder="Shorten a link here..."
        onChange={getLink}
        required
      />
      <input type="submit" value="Shorten It!" />
    </form>
  );
};

export default Form;
