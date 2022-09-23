import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h1 className="logo"><span id="earth">Earth</span>bnb</h1>
      </Link>
      <input type="text" placeholder="Search here" className="search-bar" />
      <Link to={`/newListing`}>
        {" "}
        <button className="listing-button">Add a Listing</button>
      </Link>

      <button className="login">Login</button>
    </div>
  );
}

export default Nav;
