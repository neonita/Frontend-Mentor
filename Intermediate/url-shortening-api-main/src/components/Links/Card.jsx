const Results = ({ links }) => {
  return (
    <div className="card">
      <p>{links.original}</p>

      <div className="card__short">
        <p>{links.short}</p>
        <button>Copy</button>
      </div>
    </div>
  );
};

export default Results;
