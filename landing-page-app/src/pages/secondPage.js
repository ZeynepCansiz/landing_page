import React from "react";
import Card from "../components/card.js";

const secondPage = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(15, 23, 42, 1)",
        font: "Roboto",
        position: "relative",
        overflow: "hidden",
        paddingBottom:"3rem"
      }}
    >
      <div
        className="row ms-5 me-5 pt-5"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="col-12 col-md-8 custom-text">
          <h1 style={{ color: "white" }}>The best of the best</h1>
        </div>
        <div className="col-12 col-md-4 custom-button">
          <button
            type="button"
            className="btn-sign-up-now-2"
            style={{
              border: "2px solid white",
              borderRadius: "8px",
              backgroundColor: "transparent",
              color: "white",
              width: "50%",
              padding: "10px",
            }}
          >
            Sign up now
          </button>
        </div>
      </div>
      <div className="background-squares ms-5 me-5 mt-5" style={{ position: "relative" }}>
        <div className="square square-1"></div>
        <div className="square square-2"></div>
        <div className="square square-3"></div>
        <div className="square square-4"></div>
        <div className="square square-5"></div>
      </div>
      <div className="m-5 row">
        <div className="col-md-4 col-sm-12 d-flex justify-content-center mb-5">
          <Card src="images/second-page-card1.jpeg" />
        </div>
        <div className="col-md-4 col-sm-12 d-flex justify-content-center mb-5">
          <Card src="images/second-page-card2.jpeg" />
        </div>
        <div className="col-md-4 col-sm-12 d-flex justify-content-center mb-5">
          <Card src="images/second-page-card3.jpeg" />
        </div>
      </div>
    </div>
  );
};

export default secondPage;
