import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokemonListItem from '../../PokemonListItem/PokemonListItem';
import './PokemonList.css';

class PokemonList extends Component {


    render() {

        const pokemonListHtmlArray = this.props.store.pokemonReducer.map((item, index) => {
            return (
                <PokemonListItem pokemon={item} />
            )
        })
        return (
            <div>
                { pokemonListHtmlArray}
            </div>

        )
    }
};


const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PokemonList);