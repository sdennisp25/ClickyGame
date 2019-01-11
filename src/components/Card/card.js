import React, { Component } from "react";
import "./card.css";

class Card extends Component {

  render() {

    return (
      <div className="col s12 m3">
				<div className="card" 
				// onClick={this.addpoint} 
				// value={this.state.point}
			>
          <div className="card-image">
            <img
              alt="description of image"
              aria-hidden
              src={require("../Images/mountain.jpg")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
