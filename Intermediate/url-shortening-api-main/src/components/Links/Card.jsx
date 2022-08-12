const Card = ({ links }) => {
  // console.log(links);

  return (
    <div className="card">
      {/* <p>{links.original}</p> */}
      <p>http://frontendmentor.io</p>
      <div className="card__short">
        {/* <p>{links.short}</p> */}
        <p>shrtlink.com/sdfl24</p>
        <button>Copy</button>
      </div>
    </div>
  );
};

export default Card;
