import React from "react";
import { ReactComponent as FireSvg } from "../images/flame-image.svg";

function Header() {
  return (
    <nav className="header">
      <FireSvg
        width="5%"
        height="5%"
        viewBox="0 0 500 500"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      />
      <a className="bootcamper-name" href="/dashboard">
        Hello Boot Camperson
      </a>
    </nav>
  );
}

export default Header;

//<Link to="/dashboard">Dashboard</Link>
