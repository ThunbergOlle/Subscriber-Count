import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from "./components/input.jsx";
import Counter from './components/counter.jsx';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <Counter />
      </div>
    );
  }
}

export default App;
