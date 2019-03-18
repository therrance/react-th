import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTemp: 10
    };
  }

  setTemperature = (e) => {
    this.setState({ currentTemp: e.target.value });
  }

  render() {
    let stateOfMater;

    if (this.state.currentTemp <= 32) {
      stateOfMater = 'solid';
    }
    else if (this.state.currentTemp >= 212) {
      stateOfMater = 'gas';
    }
    else {
      stateOfMater = 'liquid';
    }

    return (<div>
  <input type="text" onChange={ this.setTemperature } value={ this.state.currentTemp } />
    <p>Temperature: {this.state.currentTemp}&deg;F and water is {stateOfMater}.</p>
  </div>);
  }
}

export default App;
