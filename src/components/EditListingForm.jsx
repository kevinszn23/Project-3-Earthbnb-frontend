import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const url = process.env.MONGODB_URI || "http://localhost:4001/";

function EditListingForm() {
  const getListing = async (fn) => {
    try {
      const response = await fetch(url + `listings/${id}`);
      console.log(response);
      const oneListing = await response.json();
      console.log(oneListing);

      fn(oneListing);
    } catch (error) {
      console.log(error);
    }
  };

  const [editForm, setEditForm] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getListing(setEditForm);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const output = JSON.stringify(editForm);
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: output,
      };
      const newurl = url + `listings/${id}`;
      const response = await fetch(newurl, options);
      console.log(response);
      const updatedResponse = await response.json();
      console.log(updatedResponse);
      //   getListing(setListing);
      //   setListing(updatedResponse)
      setEditForm(updatedResponse);

      navigate(`/${id}`);
    } catch (error) {
      console.log(error);
      navigate(`/${id}`);
    }
  };

  const handleChange = (e) => {
    const data = { ...editForm, [e.target.name]: e.target.value };

    setEditForm(data);
  };

  function loaded() {
    return (
      <section className="new-listing-form-container">
        <div className="new-listing-form">
          <form onSubmit={handleSubmit}>
            <label>
              <span>Title</span>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                value={editForm.title}
              />
            </label>

                      <label>
            <span>Description</span>
            <input
              type="text"
              required
              name="description"
              onChange={handleChange}
              value={editForm.description}
            />
          </label>

            <label>
              <span>Image1</span>
              <input
                type="text"
                name="image1"
                onChange={handleChange}
                value={editForm.image1}
              />
            </label>
            <label>
              <span>Image2</span>
              <input
                type="text"
                name="image2"
                onChange={handleChange}
                value={editForm.image2}
              />
            </label>
            <label>
              <span>Image3</span>
              <input
                type="text"
                name="image3"
                onChange={handleChange}
                value={editForm.image3}
              />
            </label>
            <label>
              <span>Image4</span>
              <input
                type="text"
                name="image4"
                onChange={handleChange}
                value={editForm.image4}
              />
            </label>
            <label>
              <span>Image5</span>
              <input
                type="text"
                name="image5"
                onChange={handleChange}
                value={editForm.image5}
              />
            </label>

            <label>
              <span>Location</span>
              <input
                type="text"
                name="location"
                onChange={handleChange}
                value={editForm.location}
              />
            </label>

            <label>
              <span>Price</span>
              <input
                type="text"
                name="price"
                onChange={handleChange}
                value={editForm.price}
              />
            </label>

            <label>
              <span>Reviews</span>
              <input
                type="text"
                name="reviews"
                onChange={handleChange}
                value={editForm.reviews}
              />
            </label>

            <label>
              <span>Host</span>
              <input
                type="text"
                name="host"
                onChange={handleChange}
                value={editForm.host}
              />
            </label>
            <label>
              <span>Guests</span>
              <input
                type="number"
                name="guests"
                onChange={handleChange}
                value={editForm.guests}
              />
            </label>
            <label>
              <span>Bedrooms</span>
              <input
                type="number"
                name="bedrooms"
                onChange={handleChange}
                value={editForm.bedrooms}
              />
            </label>
            <label>
              <span>Beds</span>
              <input
                type="number"
                name="beds"
                onChange={handleChange}
                value={editForm.beds}
              />
            </label>
            <label>
              <span>Baths</span>
              <input
                type="number"
                name="baths"
                onChange={handleChange}
                value={editForm.baths}
              />
            </label>
            <label>
              <span>Dates</span>
              <input
                type="text"
                name="dates"
                onChange={handleChange}
                value={editForm.dates}
              />
            </label>
            <label>
              <span>Ratings</span>
              <input
                type="number"
                name="ratings"
                onChange={handleChange}
                value={editForm.ratings}
              />
            </label>
            <input type="submit" />
          </form>
        </div>
      </section>
    );
  }
  return <>{editForm ? loaded() : null}</>;
}

export default EditListingForm;
