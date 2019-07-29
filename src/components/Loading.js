import React from "react";

//Styles
import "./styles/Loading.css";

const Loading = () => {
  return (
    <div className="Loading__container">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
