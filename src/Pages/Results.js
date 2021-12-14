import React from "react";
import logo from "../Images/logo.svg";
import "../css/Results.css";

const Results = () => {
  return (
    <div className="results-page">
      <div className="navbar">
        <img src={logo} alt="Website logo" className="logo" />
      </div>
      <div className="test">
        <h1>Test</h1>
      </div>
    </div>
  );
};

export default Results;
