import React, { Component } from "react";
import Counter from './counter.jsx';
class Input extends Component {
  constructor() {
    super();
    this.input = "";
  }
  render() {
    this.processInput = () => {
      this.input = document.getElementById("input").value;
      if (this.input !== undefined) {
        console.log(this.input);
      }
    };
    return (
      <div class="wrapper">
        <div className="input">
          <input type="text" id="input" />
          <button id="btnInput" onClick={this.processInput}>
            Set counter
          </button>
        </div>
        <Counter />
      </div>
    );
  }
}

export default Input;
