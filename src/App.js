import React from "react";
import "./App.css";
import Landing from "./Pages/Landing.js";
import Results from "./Pages/Results.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Adds the search bar to the app-container
function App() {
  return (
    <div className="app-container">
      <div className="logo-container">
        <h1 className="logo">SHOTO</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/results" element={<Results />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
