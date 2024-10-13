import React from "react";
import Screen from "../components/screen";

const ThirdPage = () => {
  return (
    <div
      className="px-5"
      style={{
        backgroundColor: "rgba(254,252,242,255)",
        paddingTop: "10%",
        paddingBottom: "20%",
        overflowX: "hidden"
      }}
    >
      <div
        className="container row mx-auto shadow"
        style={{
          borderRadius: "30px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          width: "100%",
          padding: "7%",
        }}
      >
        <div className="col-md-6 mb-5">
          <h2 style={{ font: "Roboto", fontSize: "56px", fontWeight: "bold" }}>
            Why join us
          </h2>
          <div className="d-flex align-items-center mt-4">
            <i
              className="fa-solid fa-check"
              style={{ color: "rgba(21, 128, 61, 1)", marginRight: "10px" }}
            ></i>
            <p style={{ margin: 0 }}>
              Est et in pharetra magna adipiscing ornare aliquam.
            </p>
          </div>
          <div className="d-flex align-items-center mt-3">
            <i
              className="fa-solid fa-check"
              style={{ color: "rgba(21, 128, 61, 1)", marginRight: "10px" }}
            ></i>
            <p style={{ margin: 0 }}>
              Tellus arcu sed consequat ac velit ut eu blandit.
            </p>
          </div>
          <div className="d-flex align-items-center mt-3 mb-3">
            <i
              className="fa-solid fa-check"
              style={{ color: "rgba(21, 128, 61, 1)", marginRight: "10px" }}
            ></i>
            <p style={{ margin: 0 }}>
              Ullamcorper ornare in et egestas dolor orci.
            </p>
          </div>
          <div className="d-flex align-items-center mt-3 mb-3">
            <button
              type="button"
              className="btn-sign-up-now"
              style={{
                border: "2px solid rgba(120, 53, 15, 1)",
                borderRadius: "8px",
                backgroundColor: "transparent",
                color: "rgba(120, 53, 15, 1)",
                width: "35%",
                padding: "10px",
              }}
            >
              Sign up now
            </button>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div
            className="card"
            style={{
              width: "520px",
              height: "350px",
              minWidth: "329px",
              minHeight: "234px",
              marginLeft: "80px",
              backgroundColor: "#fff",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              border: "5px solid white",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "10",
              position: "relative",
            }}
          >
            <Screen image="images/third-page.jpeg" height={"90%"} style={{width: "520px",
              height: "350px"}}></Screen>
            <div
              style={{
                position: "absolute",
                top: "90%",
                left: "20%",
                width: "85px",
                height: "85px",
                backgroundColor: "rgba(21, 128, 61, 1)",
                borderRadius: "50px",
                opacity: "75%",
                zIndex: "3",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "70%",
                left: "85%",
                width: "218px",
                height: "218px",
                backgroundColor: "rgba(190, 24, 93, 1)",
                borderRadius: "50px",
                opacity: "75%",
                zIndex: "-1",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "0%",
                left: "-10%",
                width: "90px",
                height: "90px",
                backgroundColor: "rgba(180, 83, 9, 1)",
                borderRadius: "30px",
                opacity: "75%",
                zIndex: "-1",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "-35%",
                left: "85%",
                width: "60px",
                height: "60px",
                backgroundColor: "rgba(3, 105, 161, 1)",
                borderRadius: "50px",
                opacity: "75%",
                zIndex: "0",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                top: "90%",
                left: "78%",
                width: "74px",
                height: "74px",
                backgroundColor: "rgba(162, 28, 175, 1)",
                borderRadius: "30px",
                opacity: "75%",
                zIndex: "-1",
              }}
            ></div>
            <div
              className="me-1"
              style={{
                position: "absolute",
                top: "20%",
                left: "-30%",
                width: "660px",
                height: "210px",
                backgroundColor: "rgba(253, 230, 138, 1)",
                rotate: "135deg",
                zIndex: "-1",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "144px",
                height: "144px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <i
                className="fa fa-play"
                style={{ color: "#fff", fontSize: "64px" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
