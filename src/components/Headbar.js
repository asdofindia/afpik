import React from "react";
import Link from "gatsby-link";

import afpilogo from "../img/afpilogo.png";
import klogo from "../img/klogo.png";
import fmlogo from "../img/fmlogo.png";

const Headbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1>AFPI Karnataka</h1>
          {/* <figure className="image"> */}
          {/*   <img src={afpilogo} alt="AFPI" /> */}
          {/* </figure> */}
          {/* <figure className="image"> */}
          {/*   <img src={klogo} alt="Karnataka" /> */}
          {/* </figure> */}
        </Link>
      </div>
      <div className="navbar-end">
        <Link to="/about" className="navbar-item">
          About
        </Link>
          <a href="https://newsletter.afpikarnataka.in" className="navbar-item">
          Newsletter
        </a>
      </div>
    </div>
  </nav>
);

export default Headbar;
