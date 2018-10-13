import React, { Component } from "react";
import "./style/counter.css";
import { makeRequest } from "../request";
import Odometer from "react-odometerjs";
import config from "./config";
import Request from "request";
import Input from "./input.jsx";

import "./style/odometer-theme-default.css";
export class Counter extends Component {
  constructor(props) {
    super(props);
    this.id = "UC-lHJZR3Gqxm24_Vd_AJ5Yw";
    this.odometerValue = 0;
    this.amount = 230;
    this.req();

    Request(
      "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC-lHJZR3Gqxm24_Vd_AJ5Yw&key=" +
        config.api_key,
      (err, res, body) => {
        if (err) throw err;
        body = JSON.parse(body);
        let subscriberCount = body.items[0].statistics.subscriberCount;
        this.amount = subscriberCount;
        this.setState({ amount: subscriberCount });
        console.log(this.amount);
      }
    );
  }

  update(input) {
    console.log(input);
    this.id = input;
    console.log(this.id);
  }
  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  req() {
    setInterval(subs => {
      Request(
        "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" +
          this.id +
          "&key=" +
          config.api_key,
        (err, res, body) => {
          if (err) throw err;
          body = JSON.parse(body);
          if (body.items.length !== 0) {
            let subscriberCount = body.items[0].statistics.subscriberCount;
            this.amount = subscriberCount;
            this.info = "";
            this.setState({ info: "" });
            this.setState({ amount: subs });
            console.log(this.amount);
            console.log(this.id);
          } else {
            this.info = "Could not find the user!";
            this.amount = "0000";
            this.setState({ info: "Could not find the user!" });
            this.setState({ amount: "0000" });
          }
        }
      );
    }, 2500);
  }
  render() {
    return (
      <div className="center">
        <p>{this.info}</p>
        <h1 className="big">
          {" "}
          <Odometer format="d" duration={500} value={this.amount} />
        </h1>
      </div>
    );
  }
}

export default Counter;
