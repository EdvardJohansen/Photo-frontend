import React from "react";
import "./App.css";
import Landing from "./Pages/Landing.js";

// Adds the search bar to the navbar
function App() {
  return (
    <div>
      <div className="navbar">
        <Landing />
      </div>
    </div>
  );
}

export default App;
