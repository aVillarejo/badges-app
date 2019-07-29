import React from "react";
import { Link } from "react-router-dom";

import "./styles/Error.css";

const Error = ({ error }) => {
  return (
    <div className="Error__container">
      <div className="card">
        <div className="card-header">Error</div>
        <div className="card-body ">
          <h5 className="card-title">Found:</h5>
          <p className="card-text">{error.message}</p>
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
