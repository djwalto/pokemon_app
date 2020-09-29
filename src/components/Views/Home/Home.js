import React, { Component } from 'react';
import PokemonList from '../../PokemonList/PokemonList';

class Home extends Component {
    clickPokemon = (id) => (event) => {
        console.log(id);
        this.props.history.push(`/pokemon/${id}`);
    }
    render() {

        return (
            <div>

                <PokemonList clickPokemon={this.clickPokemon} />
            </div>
        )

    }
}

export default Home;