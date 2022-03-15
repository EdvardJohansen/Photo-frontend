import React, { useState, useEffect } from "react";
import "../css/SearchBar.css";
import axios from "axios";
import Landing from "../Components/Landing";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState(null);
  const API_URL = "https://pixabay.com/api";
  const API_KEY = "17241914-90da7b93c0ccceb734849dcd1";

  useEffect(() => {}, [images]);

  const getImages = () => {
    axios
      .get(
        API_URL +
          "/?key=" +
          API_KEY +
          "&q=" +
          searchText +
          "&image_type=photo&safesearch=true"
      )
      .then((response) => {
        setImages(response.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="interface-container">
      <div className="logo-container">
        <h1>SHOTO</h1>
      </div>
      <p>“Browse from our extensive database of photos”</p>
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for anything"
      />
      <button onClick={() => getImages()} className="btn-search">
        Go
      </button>
      {images && <Landing images={images} />}
    </div>
  );
};

export default SearchBar;
