import data from "../data.js";

const About = () => {
  console.log(data);

  return (
    <section className="about">
      <div className="container--px">
        <div className="about__text">
          <h1>Keep track of your snippets</h1>
          <p>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>

        <div className="about__image"></div>

        <div className="about__features">
          <ul>
            <li>
              <h2>Quick Search</h2>
              <p>
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
