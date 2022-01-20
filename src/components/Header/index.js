import React from "react";
import flamelogo from "../images/campfire_flame.png";

function Header() {
  return (
    <nav className="header">
      <div className="flame-container">
        <img classname="flame-logo" src={flamelogo} />
      </div>
      <a className="bootcamper-name" href="/dashboard">
        Hello Boot Camperson
      </a>
    </nav>
  );
}

export default Header;

//<Link to="/dashboard">Dashboard</Link>
