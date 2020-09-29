import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Pokemon.css';

class Pokemon extends Component {
    state = {
        pokemon: {}
    }

    componentDidMount() {
        console.log(this.props.match.params.id);

        let currentId = this.props.match.params.id;
        let currentPokemon = {};

        for (let pokemon of this.props.store.pokemonReducer) {
            if (currentId == pokemon.id) {
                currentPokemon = pokemon;
            }
        }

        this.setState(
            {
                pokemon: currentPokemon,
            },
            () => {
                console.log(this.state.pokemon)
            }
        )
    }

    onBackClick = (event) => {
        this.props.history.push('/');
    }

    render() {
        return <div className="currentPokemon">
            <div>
                <button onClick={this.onBackClick} >BACK</button>
            </div>

            <img src={this.state.pokemon.images} />
            <h1>{this.state.pokemon.name}</h1>
            <h5>{this.state.pokemon.description}</h5>

        </div>;

    }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Pokemon)