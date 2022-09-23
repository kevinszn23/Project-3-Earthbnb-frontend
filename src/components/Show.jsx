import { useState, useEffect } from "react";
import { useParams, Link, useNavigate} from "react-router-dom";

const url = process.env.MONGODB_URI || "https://project3-earthbnb-backend.herokuapp.com/";

function Show() {
  const [showListing, setShowListing] = useState([]);
  const [showReview, setShowReview] = useState([]);
  const { id } = useParams();
  const urlid = `${url}listings/${id}`;
  const urlreviews = `${url}reviews/`;
  const navigate = useNavigate()

  const getShowListings = async () => {
    try {
      const response = await fetch(urlid);
      const oneShowListing = await response.json();
      setShowListing(oneShowListing);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getShowListings();
  }, []);

  const getReviews = async () => {
    try {
      const response = await fetch(urlreviews);
      const oneReview = await response.json();
      setShowReview(oneReview);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  const reviews = showReview
    .filter((review) => review.listing === id)
    .map((eachReview, i) => {
      return (
        <div className="reviews-container">
          <p>User: {eachReview.user}</p>
          <p>{eachReview.body}</p>
        </div>
      );
    });

    const deleteListing = async () => {
        try {

            const options = { method: 'DELETE' }

            const response = await fetch(urlid, options)
            const deletedListing = await response.json()
            // our destroy - findByIdAndDelete >> original document

            navigate('/')
        } catch (err) {
            console.log(err)
            navigate("/" + id)
        }
    }

  return (
    <div className="showpage">
      <div className="heading">
        <h3> {showListing.title} </h3>
        <span>
          {" "}
          <p>
            {" "}
            ✭ {showListing.ratings} 10 reviews {showListing.location}{" "}
          </p>{" "}
        </span>
      </div>

      <div className="show-images-container">
        <div className="left-container">
          <img
            src={showListing.image1}
            alt={showListing.title}
            className="big-image"
          />
        </div>

        <div className="right-container">
          <img
            src={showListing.image2}
            alt={showListing.title}
            className="small-image"
          />

          <img
            src={showListing.image3}
            alt={showListing.title}
            className="small-image"
          />

          <img
            src={showListing.image4}
            alt={showListing.title}
            className="small-image"
          />

          <img
            src={showListing.image5}
            alt={showListing.title}
            className="small-image"
          />
        </div>
      </div>
      <div className="host-info">
        <h4>Hosted by: {showListing.host}</h4>

        <p>
          {showListing.guests} guests • {showListing.bedrooms} bedrooms •{" "}
          {showListing.beds} beds • {showListing.baths} baths{" "}
        </p>
      </div>
      <div className="image-info">
        <span>
          {" "}
          <img
            src="https://picsum.photos/200/300"
            alt={showListing.host}
            className="host-image"
          />{" "}
        </span>
      </div>

      <div className="details-container">
        <div className="description-container">
          <p>
            {showListing.description}
          </p>

          <Link to={`/editListing/${id}`}> <button>Edit</button></Link>
          <button onClick={deleteListing}>Delete</button>

        </div>
        <div className="reserve-card">
          <div className="reserve-card-container">
            <p>
              {" "}
              <span id="price">{showListing.price}</span> ✭{" "}
              {showListing.ratings} • 10 reviews{" "}
            </p>
            <p>
              $275 x 5 nights <span id="nights-price">$1,375</span>{" "}
            </p>
            <p>
              Cleaning fee <span id="cleaning-fee-price">$90</span>{" "}
            </p>
            <p>
              Service fee <span id="service-fee-price">$207</span>{" "}
            </p>
            <p>
              Total before taxes{" "}
              <span id="total-before-taxes-price">$1,672</span>{" "}
            </p>
          </div>
          <button className="reserve-button">Reserve</button>
        </div>
      </div>
      {reviews}
    </div>
  );
}

export default Show;
