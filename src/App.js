import React from "react";
import "./App.css";
import logo from "./Images/logo.svg";
import SearchBar from "./Components/SearchBar.js";

function App() {
  return (
    <div>
      {/* <img src={logo} alt="Website logo" className="logo" /> */}
      <div className="navbar">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
