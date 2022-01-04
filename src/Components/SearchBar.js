import React, { useState, useEffect } from "react";
import "../css/SearchBar.css";
import axios from "axios";
import Landing from "../Pages/Landing";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState(null);
  const API_URL = "https://pixabay.com/api";
  const API_KEY = "17241914-90da7b93c0ccceb734849dcd1";

  useEffect(() => {
  }, [images]);

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
    <div>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <button onClick={() => getImages()} className="btn-search">
        Search
      </button>
      {images && <Landing images={images} />}
    </div>
  );
};

export default SearchBar;
