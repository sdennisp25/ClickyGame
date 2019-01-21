import React from "react";
import "./pokemonCard.css";

const PokemonCard = props => (
  <div className="card">
    <div className="img-container">
      <a
        onClick={() => props.choosePokemon(props.pokemon)}
        className={props.currentScore === 0 ? "cardImage" : "cardImage"}
      >
        <img alt={props.pokemon} src={props.image} />
      </a>
    </div>
  </div>
);

export default PokemonCard;
