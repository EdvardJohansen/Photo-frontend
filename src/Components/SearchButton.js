import React from "react";
import Results from "../Pages/Results";
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
