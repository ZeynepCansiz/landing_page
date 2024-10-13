import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:"rgba(255, 251, 235, 1)"}}>
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="#" style={{font:"Roboto", color:"rgb(120,53,15,1)", fontWeight:"bold", fontSize:"45px"}}>
            Collers
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Solutions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Log In
                </a>
              </li>
              <li className="nav-item" style={{ border: "2px solid rgba(120, 53, 15, 1)", borderRadius: "8px", paddingLeft: "1rem", paddingRight:"1rem" }}>
              <a className="nav-link" href="#">
                  Sign Up Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
