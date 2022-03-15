import React from "react";
import PropTypes from "prop-types";
import "../css/Results.css";

const Results = ({ images }) => {
  return (
    <div className="image-list-container">
      {images.map((image) => (
        <img src={image.previewURL} alt="results" />
      ))}
    </div>
  );
};

Results.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Results;
