import React, { Component } from "react";

class Input extends Component {
    constructor() {
        super();
        this.input = "";
        
    }
    render() {
        this.processInput = () => {
            this.input = document.getElementById("input").value;
            if(this.input !== undefined){
                console.log(this.input);
            }
        }
        return ( 
            <div className="input">
                <input type="text" id="input"></input>
                <button id="btnInput" onClick={this.processInput}>Set counter</button>
            </div>
        );
    }
}
 
export default Input;