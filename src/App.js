import React, { Component } from "react";
import Pokemon from "./Pokemon.json";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";
import Footer from "./components/Footer";

class App extends Component {
	//sets the initial state
  state = {
    topScore: 0,
    currentScore: 0,
    Pokemon: Pokemon,
    notChosenPokemon: Pokemon
  };

	// randomizer
  randomPokemonCard = random => {
    for (var i = random.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [random[i], random[j]] = [random[j], random[i]];
    }
  };

  choosePokemon = pokemon => {
    const locatePokemon = this.state.notChosenPokemon.find(
      item => item.pokemon === pokemon
    );

    if (locatePokemon === undefined) {
      // FAIL: if you chose the same Pokemon. Resets the state to initial state, but updates the topScore
      this.setState({
        message: "You lose!",
        topScore:
          this.state.currentScore > this.state.topScore
            ? this.state.currentScore
            : this.state.topScore,
        currentScore: 0,
        Pokemon: Pokemon,
        notChosenPokemon: Pokemon
      });
    } else {
      // SUCCESS: if you didn't pick the same Pokemon. Continues to add to currentScore
      const pickNewPokemon = this.state.notChosenPokemon.filter(
        item => item.pokemon !== pokemon
      );

      this.setState({
        message: "You got it!",
        currentScore: this.state.currentScore + 1,
        Pokemon: Pokemon,
        notChosenPokemon: pickNewPokemon
      });
    }
		// FAIL or SUCCESS, will randomize the cards
    this.randomPokemonCard(Pokemon);
  };

  render() {
    return (
      <React.Fragment>
        <Header
          message={this.state.message} 
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Wrapper>
          {this.state.Pokemon.map(Pokemon => (
            <PokemonCard
              pokemon={Pokemon.pokemon}
              image={Pokemon.image}
              choosePokemon={this.choosePokemon}
              currentScore={this.state.currentScore}
            />
          ))}
          <Footer />
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
