import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/SearchBar.css";
import axios from "axios";
import SearchButton from "./SearchButton";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState(null);
  const API_URL = "https://pixabay.com/api";
  const API_KEY = "17241914-90da7b93c0ccceb734849dcd1";

  let navigate = useNavigate();
  const resultsUpdate = useRef(true);

  useEffect(() => {
    if (resultsUpdate.current) {
      resultsUpdate.current = false;
    } else {
      navigate("/results", {
        state: {
          images: images,
        },
      });
    }
  }, [images, navigate]);

  //Retrieves the images from the Pixabay API
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
      <div className="searchbar-container">
        <input
          className="input-search"
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for anything"
        />
      </div>
      <SearchButton images={images} getImages={getImages} />
    </div>
  );
};

export default SearchBar;
