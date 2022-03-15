import React from 'react'
import "../css/Landing.css";
import Results from "../Components/Results";

const Landing = ( {images} ) => {
  return (
    <div>
      <Results images={ images } />
    </div>
  )
}

export default Landing;