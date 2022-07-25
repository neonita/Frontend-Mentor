import data from "../data.js";

const About = () => {
  console.log(data);
  return (
    <section className="about container--px container--py">
      <div className="about__text">
        <h1>Keep track of your snippets</h1>
        <p>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>

      <div className="about__image"></div>

      <div className="about__features">
        <ul className="flex flex-col flex-jc-sb">
          {data[0].map((x) => (
            <li key={x.id}>
              <h2>{x.title}</h2>
              <p>{x.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
