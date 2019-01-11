import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
		return (

    <div class="col s12 m3">
      <div class="card">
        <div class="card-image">
          <img src="http://katsosco.gr/media/images/products/images/2_MT_GlacierNP500px-200x200.jpg" />
          <a class="btn-floating halfway-fab waves-effect waves-light red">
            <i class="material-icons">add_box</i>
          </a>
        </div>
      </div>
    </div>

		);
  }
}

export default Card;
