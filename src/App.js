import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const names = ['Jake','Jonh', 'Thruster'];
    const namesList = names.map((name,i)=>(
          <li key={i}>{name}</li>
        ));
    return (
      <ul>
        { namesList }
      </ul>
      );
  }
}

export default App;
