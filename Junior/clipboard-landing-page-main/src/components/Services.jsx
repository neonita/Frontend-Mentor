import data from "../data";

const Services = () => {
  //   console.log(data[1]);

  return (
    <section className="services padding--x padding--y flex flex-col">
      <header className="services__text">
        <h2 className="h h-2">Supercharge your workflow</h2>
        <p className="txt txt-2">
          We've got the tools to boost your productivity.
        </p>
      </header>

      {/* List of services */}
      <div className="services__list">
        <ul className="flex flex-col">
          {data[1].map((service) => (
            <li key={service.id}>
              <img src={service.svg.type} alt={service.alt} />
              <h3 className="h h-3">{service.title}</h3>
              <p className="txt txt-3">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* List of sponsors */}
      <div className="services__sponsors">
        <ul className="flex flex-col flex-jc-sb flex-ai-center">
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
