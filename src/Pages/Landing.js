import React from "react";
import SearchButton from "../Components/SearchButton";
import SearchBar from "../Components/SearchBar";
import "../css/Landing.css";

const Landing = () => {
  return (
    <div className="landingPage">
      <div className="navbar">
        <img src="./Images/logo.svg" alt="Website logo" className="logo"/>
        {/* <h1>Photo Website</h1> */}
      </div>
      <p>Welcome!</p>
      <div className="photoSearch">
        <SearchBar />
        <SearchButton />
      </div>
    </div>
  );
};

export default Landing;
