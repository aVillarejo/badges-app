import React from "react";

const MiniLoader = () => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        height: 0
      }}
    >
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default MiniLoader;
