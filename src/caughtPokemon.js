import React, { Component } from "react";

class CaughtPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { CaughtPokemon: [], pokemonNameInput: "" };
    console.log("constructor");
  }

  componentDidMount = () => {
    console.log("componentDidMount");
  };

  componentDidUpdate = () => {
    console.log("componentDidUpdate");
  };

  componentWillUnmount = () => {
    console.log("componentWillUnmount");
  };

  catchPokemon = () => {
    if (this.state.pokemonNameInput !== "") {
      this.setState(state => {
        const newCaughtPokemon = state.CaughtPokemon.push(
          state.pokemonNameInput
        );
        console.log(this.state.CaughtPokemon);
        this.setState({ pokemonNameInput: "" });

        return {
          newCaughtPokemon
        };
      });
    }
  };

  handleInputChange = event => {
    this.setState({ pokemonNameInput: event.target.value });
    console.log(event.target.value);
  };

  render() {
    return (
      <div>
        <p>
          Caught {this.state.CaughtPokemon.length} Pokemon on {this.props.date}
          <input
            type="text"
            value={this.state.pokemonNameInput}
            onChange={this.handleInputChange}
          />
          <button onClick={this.catchPokemon}>Catch Pokemon</button>
        </p>
        <ul>
          {this.state.CaughtPokemon.map((pok, index) => {
            return <li key={index}>{pok}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default CaughtPokemon;
