import React from "react";
import Navbar from "../components/navbar.js";

const homePage = () => {
  return (
    <div
      style={{
        background: "linear-gradient(156deg, rgba(255, 251, 235, 1) 55%, rgba(254, 243, 199, 1) 45%)",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Navbar />
      <div className="row mt-5">
        <div
          className="col-md-5 col-12 ms-5 me-auto"
          style={{ marginBottom: "131px" }}
        >
          <div className="row ms-auto me-3">
            <p style={{ font: "Roboto", fontWeight: "bold", fontSize: "60px" }}>
              Collectible Sneakers
            </p>
          </div>
          <div
            className="row ms-auto me-5"
          >
            <p style={{ font: "Roboto", fontSize: "20px" }}>
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </p>
          </div>
          <div className="row" style={{ paddingLeft: "1rem", display: "flex" }}>
            <div style={{ flex: "1", marginRight: "0.5rem" }}>
              <button
                type="button"
                className="btn-sign-up-now"
                style={{
                  border: "2px solid rgba(120, 53, 15, 1)",
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  color: "rgba(120, 53, 15, 1)",
                  width: "70%",
                  padding: "10px",
                }}
              >
                Sign up now
              </button>
            </div>
            <div style={{ flex: "1" }}>
              <button
                type="button"
                className="btn-watch-demo"
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "rgba(120, 53, 15, 1)",
                  width: "70%",
                  padding: "10px",
                }}
              >
                <i
                  className="fa-regular fa-circle-play"
                  style={{
                    color: "rgba(120, 53, 15, 1)",
                    marginRight: "0.5rem",
                  }}
                ></i>{" "}
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        <div
          className="col-md-4 col-12"
          style={{
            textAlign: "center",
            position: "relative",
            marginRight: "3rem",
          }}
        >
          <div
            className="ms-auto me-auto"
            style={{
              backgroundColor: "rgba(251, 191, 36, 1)",
              borderRadius: "50px",
              width: "100%",
              maxWidth: "372px",
              aspectRatio: "1 / 1",
              position: "relative",
              zIndex: 0,
            }}
          >
            <img
              src="/images/shoes.png"
              alt="ayakkabı"
              style={{
                width: "155%",
                height: "auto",
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                maxWidth: "600px",
              }}
            />
          </div>
        </div>
      </div>

      <div className="row mt-5 ms-5 me-auto">
        <div className="col-md-4 ms-auto me-auto">
          <div
            className="row ms-3"
            style={{ fontSize: "30px", position: "relative" }}
          >
            <div
              className="icon-container"
              style={{ position: "relative", display: "inline-block" }}
            >
              <i
                className="fa-solid fa-trophy"
                style={{ position: "relative", zIndex: 1 }}
              ></i>
              <div className="triangle-background"></div>
            </div>
          </div>
          <p style={{ font: "Roboto", fontSize: "20px", marginTop: "1rem" }}>
            Nibh viverra
          </p>
          <p style={{ font: "Roboto", fontSize: "18px", fontWeight: "100" }}>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>

        <div className="col-md-4  ms-auto me-auto">
          <div
            className="row ms-3"
            style={{ fontSize: "30px", position: "relative" }}
          >
            <div
              className="icon-container"
              style={{ position: "relative", display: "inline-block" }}
            >
              <i
                className="fa-solid fa-archway"
                style={{ position: "relative", zIndex: 1 }}
              ></i>
              <div
                className="triangle-background"
                style={{
                  transform: "translate(-70%, 15%)",
                  rotate: "90deg",
                }}
              ></div>
            </div>
          </div>
          <p style={{ font: "Roboto", fontSize: "20px", marginTop: "1rem" }}>
            Cursus amet
          </p>
          <p style={{ font: "Roboto", fontSize: "18px", fontWeight: "100" }}>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>

        <div className="col-md-4  ms-auto me-auto">
          <div
            className="row ms-3"
            style={{ fontSize: "30px", position: "relative" }}
          >
            <div
              className="icon-container"
              style={{ position: "relative", display: "inline-block" }}
            >
              <i
                className="fa-solid fa-tv"
                style={{ position: "relative", zIndex: 1 }}
              ></i>
              <div className="circle-background"></div>
            </div>
          </div>
          <p style={{ font: "Roboto", fontSize: "20px", marginTop: "1rem" }}>
            Ipsum fermentum
          </p>
          <p style={{ font: "Roboto", fontSize: "18px", fontWeight: "100" }}>
            Sit bibendum donec dolor fames neque vulputate non sit aliquam.
            Consequat turpis natoque leo, massa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default homePage;
