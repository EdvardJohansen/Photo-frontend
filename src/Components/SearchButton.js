import React from "react";
import "../css/SearchButton.css";

const SearchButton = ({ images, getImages }) => {
  return (
    <div className="search-button-container">
      <button onClick={() => getImages()} className="button-search">
        Search
      </button>
    </div>
  );
};

export default SearchButton;
