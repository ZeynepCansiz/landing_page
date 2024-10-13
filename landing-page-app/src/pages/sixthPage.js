import React from "react";

const SixthPage = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(120, 53, 15, 1)",
        backgroundImage: `url(images/worldMap.png)`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        marginTop: "-100px",
        overflowX: "hidden",
        padding: "5rem 2rem",
        position: "relative", 
      }}
    >
      <img
        src="images/ellipses.png" 
        alt="Overlay"
        style={{
          position: "absolute", 
          top: "50%", 
          left: "50%",
          transform: "translate(-50%, -50%)", 
          width: "60%", 
          height: "auto", 
          zIndex: 1,
        }}
      />

      <div className="row mb-5 p-5 d-flex">
        <div
          className="shadow p-1 image-container"
          style={{
            width: "20%",
            height: "30%",
            minHeight: "200px",
            minWidth: "256px",
            backgroundColor: "transparent",
            borderRadius: "20px",
            zIndex:"3"
          }}
        >
          <img
            src="images/sixth-page-image.jpeg"
            alt="screen"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "15px",
            }}
          />
          <div
            className="card-body mt-1 p-2"
            style={{
              backgroundColor: "rgba(226, 232, 240, 1)",
              borderRadius: "5px",
              zIndex:"3"
            }}
          >
            <p className="card-text" style={{zIndex:"3"}}>
              Emma Simpson collected one pair of{" "}
              <span style={{ fontWeight: "bold" }}>Cool Shoes.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <h1
          style={{
            color: "rgba(255, 251, 235, 1)",
            fontSize: "clamp(48px, 10vw, 96px)",
            fontWeight: "bold",
            zIndex:"3"
          }}
        >
          11,658,467
        </h1>
        <h3
          style={{
            color: "rgba(255, 251, 235, 1)",
            fontSize: "clamp(24px, 5vw, 56px)",
            fontWeight: "bold",
            zIndex:"3"
          }}
        >
          Shoes Collected
        </h3>
      </div>
    </div>
  );
};

export default SixthPage;
