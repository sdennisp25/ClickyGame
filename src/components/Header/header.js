import React from "react";
import "./Header.css";

const Header = props => (
  <div>
    <nav>
      <div className="nav-wrapper">
        <ul className="brand-logo right">
					<li>
						Score: {props.currentScore} | {props.message}
					</li>
          <li>Clicky Game</li>
          <li className={props.message}>&nbsp;| Top Score: {props.topScore}</li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
