import React from "react";

const CardComponent = ({ title, paragraph, image, icon, name, job }) => {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: "20px",
        minHeight: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <div className="card-body shadow">
        <h5 className="card-title">
          <i className={icon}></i>
          {title}
        </h5>
        <p
          className="card-text ms-3 mb-5 mt-3"
          style={{
            whiteSpace: "normal",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {paragraph}
        </p>
        <div className="d-flex align-items-center m-3">
          <img
            src={image}
            alt="people-1"
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "1rem",
            }}
          />
          <div className="d-flex flex-column">
            <span style={{ fontSize: "16px" }}>{name}</span>
            <small style={{ color: "gray" }}>{job}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
