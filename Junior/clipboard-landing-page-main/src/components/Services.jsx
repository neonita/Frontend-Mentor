import IconBlacklist from "../assets/icons/icon-blacklist.svg";

const Services = () => {
  return (
    <section className="services container--x container--y">
      <header className="services__text">
        <h2 className="h h2">Supercharge your workflow</h2>
        <p>We've got the tools to boost your productivity.</p>
      </header>

      {/* List of services */}
      <div className="services__list">
        <ul>
          <li>
            <img src={IconBlacklist} alt="icon" />
            <h3>Create blacklists</h3>
            <p>
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </li>
        </ul>
      </div>

      {/* List of sponsors */}
    </section>
  );
};

export default Services;
