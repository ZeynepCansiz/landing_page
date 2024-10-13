import React from "react";

const footer = () => {
  return (
    <div
      style={{ backgroundColor: "rgba(15, 23, 42, 1)", font: "Roboto" }}
      className="p-5"
    >
      <div className="row d-flex align-items-center justify-content-center text-center">
        <div className="col-md-3 mb-5" style={{ color: "white" }}>
          <p style={{ fontWeight: "bold" }}>Product</p>
          <p>Pricing</p>
          <p>Overview</p>
          <p>Browse</p>
          <p>Accessibility</p>
          <p>Five</p>
        </div>
        <div className="col-md-3 mb-5" style={{ color: "white" }}>
          <p style={{ fontWeight: "bold" }}>Solutions</p>
          <p>Brainstorming</p>
          <p>Ideation</p>
          <p>Wireframing</p>
          <p>Research</p>
          <p>Design</p>
        </div>
        <div className="col-md-3 mb-5" style={{ color: "white" }}>
          <p style={{ fontWeight: "bold" }}>Support</p>
          <p>Contact Us</p>
          <p>Developers</p>
          <p>Documentation</p>
          <p>Integrations</p>
          <p>Reports</p>
        </div>
        <div className="col-md-3 mb-5" style={{ color: "white", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <p style={{ fontWeight: "bold" }}>Get The App</p>
          <button className="btn d-flex mb-1" style={{ borderColor: "white", backgroundColor: "black", color: "inherit", justifyContent: "center", alignItems: "center", padding: "5px 20px"}}>
            <i className="fa-brands fa-apple me-3" style={{ fontSize: "30px" }}></i>
            <div className="d-flex flex-column" style={{ textAlign: "left" }}>
              <span style={{ fontSize: "10px" }}>Download on the</span>
              <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                App Store
              </span>
            </div>
          </button>
          <button className="btn d-flex mb-4" style={{ borderColor: "white", backgroundColor: "black", color: "inherit", justifyContent: "center", alignItems: "center", padding: "5px 17px"}}>
          <i class="fa-brands fa-google-play me-3" style={{ fontSize: "25px" }}></i>
            <div className="d-flex flex-column" style={{ textAlign: "left" }}>
              <span style={{ fontSize: "10px" }}>GET IT ON</span>
              <span style={{ fontSize: "15px", fontWeight: "bold" }}>Google Play</span>
            </div>
          </button>
          <p>Follow Us</p>
          <p style={{ display: "flex", justifyContent: "space-between", width: "50%", maxWidth: "250px" }}>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          </p>
        </div>
      </div>
      <div style={{borderTop:"1px solid white"}}></div>
      <div className="row" style={{color:"white"}}>
        <div className="col-md-8 mt-3 custom-text">Collers @ 2023. All right reserved.</div>
        <div className="col-md-4 mt-3 d-flex" style={{ justifyContent: "space-between", alignItems: "center" }}>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Contact</p>
            <p><i class="fa-solid fa-globe me-2"></i>EN</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
