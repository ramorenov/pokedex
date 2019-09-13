import React, { Component } from "react";

class BestPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonNames: [],
      isLoading: true
    };
  }

  componentDidMount = () => {
    fetch("https://pokeapi.co/api/v2/pokedex/1/")
      .then(res => res.json())
      .then(data =>
        this.setState({
          pokemonNames: [
            data.pokemon_entries[0].pokemon_species.name,
            data.pokemon_entries[3].pokemon_species.name,
            data.pokemon_entries[6].pokemon_species.name
          ],
          isLoading: false
        })
      )
      .catch(err => {
        this.setState({
          isLoading: false,
          err: err
        });
      });
  };

  render() {
    if (this.state.isLoading) {
      return <span>Loading...</span>;
    } else if (this.state.err) {
      return <span>Something went wrong </span>;
    } else if (!this.state.isloading) {
      return (
        <ul>
          {this.state.pokemonNames.map((pok, index) => {
            return <li key={index}>{pok}</li>;
          })}
        </ul>
      );
    }
  }
}

export default BestPokemon;
