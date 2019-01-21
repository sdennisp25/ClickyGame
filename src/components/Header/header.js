import React from "react";
import "./Header.css";

const Header = props => (
  <div>
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="brand-logo center">
          <li>Clicky Game</li>
          <li className={(props.message !== -1, props.message !== -1)} />
          &nbsp;| Top Score:
          <span style={{ color: "yellow" }}>{props.topScore}</span>
        </ul>
      </div>
    </nav>

    <nav class="nav-wrapper">
      <ul id="nav-mobile" class="brand-logo center">
        <li>
          Score:
          <span style={{ color: "yellow" }}>{props.currentScore}</span> |{" "}
          {props.message}
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
