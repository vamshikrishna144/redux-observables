import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './components/Items.component';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Items />
      </div>
    );
  }
}

export default App;
