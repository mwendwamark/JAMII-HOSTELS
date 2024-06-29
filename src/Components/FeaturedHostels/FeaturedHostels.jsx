import React from "react";
import "./FeaturedHostels.css";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Bed1 from "../../assets/bed1.jpg"
import Bed2 from "../../assets/bed2.jpg"
import Bed3 from "../../assets/bed3.jpg";


const FeaturedHostels = () => {
  return (
    <>
      <div className="popular-hostels container section">
        <div className="popular-hostels-title">
          <h2>Our popular hostels we recommend for you!</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            eligendi est vel delectus, debitis magni totam.
          </p>
        </div>
        <div className="popular-hostels-cards">
          <div className="popular-hostel-card">
            <img src={Bed1} alt="" />
            <h3>Jix Apartment</h3>
            <div className="location">
              <IoLocationOutline />
              <p>Kilimani</p>
            </div>
            <div className="popular-hostel-pricing-and-rating">
              <p>
                <span>$263</span>/month
              </p>

              <div className="popular-rating">
                <FaStar className="pop-star-icon" />
                <p>4.8</p>
              </div>
            </div>
          </div>

          <div className="popular-hostel-card">
            <img src={Bed2} alt="" />
            <h3>Marimba</h3>
            <div className="location">
              <IoLocationOutline />
              <p>Safari Park</p>
            </div>
            <div className="popular-hostel-pricing-and-rating">
              <p>
                <span>$199</span>/month
              </p>

              <div className="popular-rating">
                <FaStar className="pop-star-icon" />
                <p>4.7</p>
              </div>
            </div>
          </div>

          <div className="popular-hostel-card">
            <img src={Bed3} alt="" />
            <h3>Letu Apartments</h3>
            <div className="location">
              <IoLocationOutline />
              <p>Westlands</p>
            </div>
            <div className="popular-hostel-pricing-and-rating">
              <p>
                <span>$210</span>/month
              </p>

              <div className="popular-rating">
                <FaStar className="pop-star-icon" />
                <p>4.9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedHostels;
