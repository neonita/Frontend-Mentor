import "./accordion.scss";

const Accordion = () => {
  return (
    <section className="accordion">
      <div className="accordion__img"></div>

      <div className="accordion__faq">
        <h1 className="sr-only">FAQ</h1>
        <h2>FAQ</h2>

        <div className="card">
          <p>How many team members can I invite?</p>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
