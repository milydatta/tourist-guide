import React from "react";
import './Navbar.css';

const Navbar = () => {

  return (
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav ml-auto">
//       <li class="navbar-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="navbar-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>

//       <li class="navbar-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>

//   </div>
// </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
       <div className="container">
         <a className="navbar-brand" href="#home">
           TOURIST <span className="text-success">GUIDE .</span><span className="text-danger">.</span>
         </a>
         <button
        className="navbar-toggler"
        type="button"
      data-toggle="collapse"
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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

// aria-expanded="false" aria-label="Toggle navigation"
