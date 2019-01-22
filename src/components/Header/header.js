import React from "react";
import "./Header.css";

const Header = props => (
  <div>
    <nav>
      <div className="nav-wrapper">
        <ul className="brand-logo center">
          <li>Clicky Game</li>
          <li className={props.message}>&nbsp;| Top Score: {props.topScore}</li>
        </ul>
      </div>
    </nav>

    <nav className="nav-wrapper">
      <ul className="brand-logo center">
        <li>
          Score: {props.currentScore} | {props.message}
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
