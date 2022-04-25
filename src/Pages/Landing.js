import React from "react";
import "../css/Landing.css";
import SearchBar from "../Components/SearchBar";

// Displays the images on the Landing page
const Landing = () => {
  return (
    <div className="landing-container">
      <p className="landing-subtitle">
        Browse from our extensive database of photos
      </p>
      <SearchBar />
    </div>
  );
};

export default Landing;
