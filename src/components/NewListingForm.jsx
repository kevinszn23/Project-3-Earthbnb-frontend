// fix navigate/redirect to home page later

import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";

const url = process.env.MONGODB_URI || "https://project3-earthbnb-backend.fly.dev/";

const getListing = async (fn) => {
  try {
    const response = await fetch(url + "listings");
    const allListing = await response.json();

    fn(allListing);
  } catch (error) {
    console.log(error);
  }
};

function NewListingForm() {
    const navigate = useNavigate();
  const initNewForm = {
    title: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    location: "",
    price: "",
    reviews: "",
    host: "",
    guests: 0,
    bedrooms: 0,
    beds: 0,
    baths: 0,
    dates: "",
    ratings: 0,
  };

  const [listing, setListing] = useState([]);
  const [newListing, setNewListing] = useState(initNewForm);

  useEffect(() => {
    getListing(setListing);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newForm = { ...newListing };
      const output = JSON.stringify(newForm);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: output,
      };
      const newurl = url + "listings";
      const response = await fetch(newurl, options);
      console.log(response);
      const responseData = await response.json();
      console.log(responseData);
      getListing(setListing);
      setNewListing(initNewForm);
      navigate("/")
    } catch (error) {
      console.log(error);
      navigate("/")
    }
  };

  console.log(newListing);
  const handleChange = (e) => {
    const data = { ...newListing, [e.target.name]: e.target.value };

    setNewListing(data);
  };

  return (
    <section className="new-listing-form-container">
      <div className="new-listing-form">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Title</span>
            <input
              type="text"
              required
              name="title"
              onChange={handleChange}
              value={newListing.title}
            />
          </label>

          <label>
            <span>Description</span>
            <input
              type="text"
              required
              name="description"
              onChange={handleChange}
              value={newListing.description}
            />
          </label>

          <label>
            <span>Image1</span>
            <input
              type="text"
              required
              name="image1"
              onChange={handleChange}
              value={newListing.image1}
            />
          </label>
          <label>
            <span>Image2</span>
            <input
              type="text"
              required
              name="image2"
              onChange={handleChange}
              value={newListing.image2}
            />
          </label>
          <label>
            <span>Image3</span>
            <input
              type="text"
              required
              name="image3"
              onChange={handleChange}
              value={newListing.image3}
            />
          </label>
          <label>
            <span>Image4</span>
            <input
              type="text"
              required
              name="image4"
              onChange={handleChange}
              value={newListing.image4}
            />
          </label>
          <label>
            <span>Image5</span>
            <input
              type="text"
              required
              name="image5"
              onChange={handleChange}
              value={newListing.image5}
            />
          </label>

          <label>
            <span>Location</span>
            <input
              type="text"
              required
              name="location"
              onChange={handleChange}
              value={newListing.location}
            />
          </label>

          <label>
            <span>Price</span>
            <input
              type="text"
              required
              name="price"
              onChange={handleChange}
              value={newListing.price}
            />
          </label>

          <label>
            <span>Reviews</span>
            <input
              type="text"
              required
              name="reviews"
              onChange={handleChange}
              value={newListing.reviews}
            />
          </label>

          <label>
            <span>Host</span>
            <input
              type="text"
              required
              name="host"
              onChange={handleChange}
              value={newListing.host}
            />
          </label>
          <label>
            <span>Guests</span>
            <input
              type="number"
              required
              name="guests"
              onChange={handleChange}
              value={newListing.guests}
            />
          </label>
          <label>
            <span>Bedrooms</span>
            <input
              type="number"
              required
              name="bedrooms"
              onChange={handleChange}
              value={newListing.bedrooms}
            />
          </label>
          <label>
            <span>Beds</span>
            <input
              type="number"
              required
              name="beds"
              onChange={handleChange}
              value={newListing.beds}
            />
          </label>
          <label>
            <span>Baths</span>
            <input
              type="number"
              required
              name="baths"
              onChange={handleChange}
              value={newListing.baths}
            />
          </label>
          <label>
            <span>Dates</span>
            <input
              type="text"
              required
              name="dates"
              onChange={handleChange}
              value={newListing.dates}
            />
          </label>
          <label>
            <span>Ratings</span>
            <input
              type="number"
              required
              name="ratings"
              onChange={handleChange}
              value={newListing.ratings}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    </section>
  );
}

export default NewListingForm;
