import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'GET_POKEMON' })
  }

  render() {
    return (
      <div className="App">
        <h1>Pokemon!</h1>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(App);
