import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import Landing from "../Pages/Landing.js";
import "../css/Results.css";

//Displays the image results in a list
const Results = () => {
  const { state } = useLocation();
  useEffect(() => {
    console.log(state.images);
  });

  return (
    <div>
      <div className="results-navbar">
        <Landing />
        <div className="image-list-container">
          {state.images.map((image) => (
            <img src={image.previewURL} alt="results" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
