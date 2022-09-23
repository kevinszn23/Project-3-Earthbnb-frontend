import Filter from "./Filter";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = process.env.MONGODB_URI || "https://project3-earthbnb-backend.herokuapp.com/";

function Main() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    getListing();
    console.log(listings);
  }, []);

  const getListing = async () => {
    try {
      const response = await fetch(url + "listings");
      const allListing = await response.json();
      setListings(allListing);
    } catch (error) {
      console.log(error);
    }
  };

  const bnbs = listings.map((bnb, i) => {
    return (
      <div key={i} className="card-container">
        <div key={i} className="card">
          <Link to={`/${bnb._id}`}>
            <img
              src={bnb.image1}
              alt={bnb.title}
              className="listing-images"
            />
          </Link>
        </div>

        <p className="card-details">
          {bnb.location} <span> ✭ {bnb.ratings} </span>{" "}
        </p>

        <p>{bnb.dates}</p>
        <p>{bnb.price}</p>
      </div>
    );
  });

  return (
    <div>
      <Filter />
      <div className="main">{bnbs}</div>
    </div>
  );
}

export default Main;
