import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.handleClick=this.handleClick.bind(this);
  };
  handleClick(){
    axios.post('https://ancient-island-40287.herokuapp.com/movies', {
      movie_name: 'test',
      genre: 'test',
      release_year: 1990
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Movie App</h1>
        </header>
        <button className='button' onClick={this.handleClick}>Get All movies</button>

      </div>
    );
  }
}

export default App;
