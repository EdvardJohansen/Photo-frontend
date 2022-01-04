import "./App.css";
import logo from "./Images/logo.svg";
import Landing from "./Pages/Landing.js";
import SearchBar from "./Components/SearchBar.js";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <div className="navbar">
          <img src={logo} alt="Website logo" className="logo" />
        </div>
        <div className="photoSearch">
          <Landing />
          <SearchBar />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
