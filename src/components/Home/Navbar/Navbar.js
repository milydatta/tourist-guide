import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          TOURIST <span className="text-success">GUIDE .</span><span className="text-danger">.</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse links-container show-links" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 links">
            <li className="nav-item">
              <a className="nav-link ms-5 active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-5" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-5" href="#service">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-5" href="#team">
              Team 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-5" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-5" href="#Login">
              <button className="btn btn-success ms-5">Log IN</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
