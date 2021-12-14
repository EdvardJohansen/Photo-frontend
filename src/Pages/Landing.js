import React from "react";
import SearchButton from "../Components/SearchButton";
import SearchBar from "../Components/SearchBar";
import logo from "../Images/logo.svg"
import "../css/Landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="navbar">
        <img src={logo} alt="Website logo" className="logo"/>
      </div>
      <div className="photoSearch">
        <SearchBar />
        <SearchButton />
      </div>
    </div>
  );
};

export default Landing;
