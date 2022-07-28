import data from "../data";

const Services = () => {
  console.log(data[1]);

  return (
    <section className="services container--x container--y">
      <header className="services__text">
        <h2 className="h h2">Supercharge your workflow</h2>
        <p>We've got the tools to boost your productivity.</p>
      </header>

      {/* List of services */}
      <div className="services__list">
        <ul>
          {data[1].map((service) => (
            <li>
              <img src={service.svg.type} alt={service.alt} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* List of sponsors */}
      <div className="services__sponsors">
        <ul>
          {data[2].map((sponsor) => (
            <li key={sponsor.id}>
              <img src={sponsor.png.type} alt={sponsor.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
