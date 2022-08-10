import { useState } from "react";
import Form from "./Form";
import Card from "./Card";

const Links = () => {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState({});
  console.log(links);

  const convert = async (x) => {
    let response = await fetch(x);
    let data = await response.json();

    let originalLink = data.result.original_link;
    let shortLink = data.result.short_link;
    console.log(data, originalLink, shortLink);

    return setLinks({
      original: originalLink,
      short: shortLink,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let apiBase = `https://api.shrtco.de/v2/shorten`;
    let link = `${apiBase}?url=${url}`;
    convert(link);
    console.log(link);
  };

  const getLink = (e) => {
    let inputLink = e.target.value;
    setUrl(inputLink); // sets inputted value to url
    console.log(inputLink);
  };

  return (
    <section className="links">
      <div className="links__container">
        <Form className="form" handlesubmit={handleSubmit} getlink={getLink} />
        <Card className="card" links={links} />
      </div>
    </section>
  );
};

export default Links;
