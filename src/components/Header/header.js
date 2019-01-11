import React, { Component } from "react";
import Score from "../Score";
import "./header.css";

class Header extends Component {
  state = {
    point: 0
  };

  startGame = () => {
    console.log("Start Game!");
    this.setState({ point: 0 });
  };
  resetGame = () => {
    console.log("Game Reset!");
    this.setState({ point: 0 });
  };

  render() {
    console.log("HEADER POINT: ", this.state.point);

    return (
      <nav>
        <div className="nav-wrapper">
          <div className="brand-logo right">ClickyGame</div>
					<Score />
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <button onClick={this.startGame}>| Start |</button>
            </li>
            <li>
              <button onClick={this.resetGame}>| Reset |</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
