import React, { Component } from 'react'
import './style/counter.css';
import { makeRequest } from '../request';
export class Counter extends Component {
    constructor() {
        super()
        this.amount = 230;
        this.req();
    }

    req() {
        makeRequest((subs) => {
            this.amount = subs;
            this.setState({ amount: subs });
            console.log(this.amount);
            return;
        });
    }
    render() {
        // makeRequest((subs) => {
        //     this.amount = subs;
        //     this.setState({amount : subs});
        //     console.log(this.amount);

        // });
        return (
            <div className="center">
                <h1 className="big">{this.amount}</h1>
            </div>
        )
    }
}

export default Counter
