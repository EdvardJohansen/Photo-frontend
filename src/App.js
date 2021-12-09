import "./App.css";
import reactDom from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Pages } from "react";
import Landing from "./Pages/Landing.js";
import Result from "./Pages/Results.js";

function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
