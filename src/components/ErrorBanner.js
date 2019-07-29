import React from "react";

const ErrorBanner = ({ error, onClick }) => {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      <strong>Error Found!</strong> {error.message}
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={onClick}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default ErrorBanner;
