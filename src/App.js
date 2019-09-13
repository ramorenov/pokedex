import React, { Component } from "react";
import Logo from "./logo.js";
import CaughtPokemon from "./caughtPokemon";
import BestPokemon from "./bestPokemon";
import Clock from "./Clock";

const pokemonNames = ["Squirtle", "Bulbasaur", "Charmander"];
const date = new Date().toLocaleDateString();

class App extends Component {
  logWhenClicked = () => {
    console.log("mensaje desde logWhenClicked");
  };

  render() {
    return (
      <div>
        <Logo appName="Pokedex" handleClick={this.logWhenClicked} />
        <BestPokemon pokemonNames={pokemonNames} />
        <CaughtPokemon date={date} />
        <Clock />
      </div>
    );
  }
}

export default App;
