import React from "react";

const Screen = ({ image, style, height }) => {
  return (
    <div
      className="shadow p-1 pt-3"
      style={{
        width: "80%",
        height: "50%",
        position: "absolute",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: "20px",
        ...style,  
      }}
    >
      <div
        className="d-flex justify-content-start"
        style={{ position: "absolute", top: "15px", left: "15px" }}
      >
        <div
          style={{
            marginRight: "5px",
            width: "10px",
            height: "10px",
            backgroundColor: "rgba(225, 29, 72, 1)",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            marginRight: "5px",
            width: "10px",
            height: "10px",
            backgroundColor: "rgba(251, 191, 36, 1)",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            marginRight: "5px",
            width: "10px",
            height: "10px",
            backgroundColor: "rgba(34, 197, 94, 1)",
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <img
        src={image}
        alt="screen"
        style={{
          width: "100%",
          height: height,
          borderRadius: "15px",
          marginTop: "20px",
          position: "relative",
          zIndex: "2",
        }}
      />
    </div>
  );
};

export default Screen;
