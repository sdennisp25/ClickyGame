import React, { Component } from "react";
import "./score.css";

class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: 0
    };
  }

  addpoint = event => {
    event.preventDefault();
    let total = Number(this.state.point) + 1;
    this.setState({ point: total });
  };

  render() {
    console.log("CARD POINT: ", this.state.point);
    return (
      <div>
        <div>{this.state.addpoint}</div>
        <div className="scoreBox">
          <button onClick={this.addpoint}>Add</button>
        </div>
      </div>
    );
  }
}

export default Score;
