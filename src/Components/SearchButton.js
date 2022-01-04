import React from "react";
import { Link } from "react-router-dom";
import "../css/SearchButton.css";

const SearchButton = () => {
  return (
    <div className="btnSearch">
      <Link to="/results">
        <button>Search</button>
      </Link>
    </div>
  );
};

export default SearchButton;
