import React from "react";
import "./HomePage.css";
import { IoSearch } from "react-icons/io5";
import FeaturedHostels from "../../Components/FeaturedHostels/FeaturedHostels";
const HomePage = () => {
  return (
    <>
      <div className="home-page-intro">
        <div className="gradient"></div>
        <div className="home-page-intro-contents">
          <div className="welcome-message-section">
            <h1>
              <span>Jamii hostels - </span>
              Your Home Away from Home.{" "}
            </h1>{" "}
            <h2>Experience Comfort, Community, and Adventure with Us!</h2>
            <p>
              Enjoy the best student accommodation designed to make the most out
              of your student days. Simply book your room online and join our
              vibrant community.
            </p>
            <p>
              <em>Community-living made safe and easy!</em>
            </p>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search for hostels..." />
            <button className="search-button">
              <IoSearch />
            </button>
          </div>{" "}
        </div>
      </div>
      <FeaturedHostels/>
    </>
  );
};

export default HomePage;
