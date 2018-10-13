import React, { Component } from "react";
import Counter from "./counter.jsx";
class Input extends Component {
  constructor() {
    super();
    this.input = "";
  }
  render() {

    this.onClick = () => {
      let newInput = document.getElementById("input").value;
      this.input = newInput;
      console.log(this.input);
      this.child.update(this.input); // do stuff
    };
    return (
      <div class="wrapper">
        <Counter onRef={ref => (this.child = ref)} />

        <div className="input">
          <input type="text" id="input" />
          <button id="btnInput" onClick={this.onClick}>
            Get data
          </button>
        </div>
      </div>
    );
  }
}

export default Input;
