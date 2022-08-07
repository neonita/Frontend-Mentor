const NavLinks = () => {
  return (
    <div className="navlinks">
      <ul>
        <li>
          <a href="/" className="txt txt-4">
            Features
          </a>
        </li>
        <li>
          <a href="/" className="txt txt-4">
            Pricing
          </a>
        </li>
        <li>
          <a href="/" className="txt txt-4">
            Resources
          </a>
        </li>
      </ul>

      <hr />

      <ul>
        <li>
          <a href="/" className="txt txt-4">
            Login
          </a>
        </li>
        <li>
          <button href="/">Sign Up</button>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
