import React from "react";

const CardComponent = ({ src }) => {
  return (
    <div
      className="card"
      style={{ width: "18rem", backgroundColor: "rgba(15, 23, 42, 1)"}}
    >
      <img
        src={src}
        className="card-img-top"
        alt="card-images"
        style={{
          width: "100%", 
          height: "220px",
          objectFit: "cover",
        }}
      />
      <div className="card-body white-shadow" style={{ color: "white" }}>
        <h5 className="card-title">Title</h5>
        <p className="card-text">
          Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
        </p>
        <button
          type="button"
          className="btn-sign-up-now-2 col-md-12"
          style={{
            border: "2px solid white",
            borderRadius: "8px",
            backgroundColor: "transparent",
            color: "white",
            width: "100%",
            padding: "10px",
          }}
        >
            <i class="fa-solid fa-cart-shopping me-3"></i>
          Buy now
        </button>
      </div>
    </div>
  );
};

export default CardComponent;