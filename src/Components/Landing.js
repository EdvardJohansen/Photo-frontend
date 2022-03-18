import React from "react";
import Results from "../Components/Results";

//Displays the images on the Landing page
const Landing = ({ images }) => {
  return (
    <div>
      <Results images={images} />
    </div>
  );
};

export default Landing;
