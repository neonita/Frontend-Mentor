import { useState } from "react";
import Form from "./Form";
import Card from "./Card";

const Links = () => {
  const [url, setUrl] = useState("");
  let list;

  const saveToSessionStorage = (object) => {
    // Check if sessionStore is empty. If empty, create an empty array.
    if (sessionStorage.getItem("cardItems") === null) {
      list = [];
    } else {
      // Parse data into an array of objects
      list = JSON.parse(sessionStorage.getItem("cardItems"));

      if (list.length > 2) {
        list.pop();
      }
    }

    // Push new object into the array
    list.push(object);
    // Re-serialize (turn back into a string) and store it in sessionStorage
    sessionStorage.setItem("cardItems", JSON.stringify(list));
    console.log(list);

    return list;
  };
  console.log(saveToSessionStorage());

  const convert = async (x) => {
    let response = await fetch(x);
    let data = await response.json();

    let originalLink = data.result.original_link;
    let shortLink = data.result.short_link;
    console.log(`OG LINK: ${originalLink},\nSHORT LINK: ${shortLink}`);

    // Store data in object
    let links = {
      ogLink: originalLink,
      shortLink: shortLink,
    };

    // Send to saveToSessionStorage fxn
    saveToSessionStorage(links);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let apiBase = `https://api.shrtco.de/v2/shorten`;
    let link = `${apiBase}?url=${url}`;
    convert(link);
  };

  const getLink = (e) => {
    let inputLink = e.target.value;
    setUrl(inputLink); // sets inputted value to url
  };

  return (
    <section className="links padding-x">
      <div className="links__container">
        <Form className="form" handlesubmit={handleSubmit} getlink={getLink} />

        {list.map((x, index) => (
          <Card className="card" links={x} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Links;
