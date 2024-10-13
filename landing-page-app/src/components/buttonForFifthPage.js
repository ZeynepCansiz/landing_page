import React from "react";

const buttonForFifthPage = ({ icon, text }) => {
  return (
    <div>
      <button
        type="button"
        className="d-flex align-items-center justify-content-center mt-3"
        style={{
          border: "0px solid transparent",
          borderRadius: "8px",
          backgroundColor: "transparent",
          color: "black",
          width: "100%",
          padding: "10px",
          cursor: "default",
        }}
      >
        <i className={`${icon} ms-1`}></i>
        <span className="flex-grow-1 text-center">{text}</span>
      </button>
    </div>
  );
};

export default buttonForFifthPage;
