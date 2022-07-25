import data from "../data.js";

const About = () => {
  console.log(data);
  return (
    <section className="about padding--x padding--y">
      <div className="about__text">
        <h2 className="h-2">Keep track of your snippets</h2>
        <p className="txt-2">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>

      <div className="container">
        <div className="about__image"></div>

        <div className="about__features">
          <ul className="flex flex-col flex-jc-sb">
            {data[0].map((x) => (
              <li key={x.id}>
                <h3 className="h-3">{x.title}</h3>
                <p className="txt-3">{x.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
