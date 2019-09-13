import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <header>
        <h1>"Welcome to the {this.props.appName}"</h1>
        <img
          onClick={this.props.handleClick}
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          alt="pokemon"
        ></img>
      </header>
    );
  }
}

export default Logo;
