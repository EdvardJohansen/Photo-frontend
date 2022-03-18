import React from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar.js";

//Adds the search bar to the navbar
function App() {
  return (
    <div>
      <div className="navbar">
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
