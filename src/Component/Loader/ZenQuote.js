import axios from "axios";
import React, { Component } from "react";
import "./ZenQuote.css";

export default class ZenQuote extends Component {
  constructor(props) {
    console.log("Inside Constructor");
    super(props);
    this.state = {
      quotes: "",
      isLoader: false,
    };
  }
  async componentDidMount() {
    console.log(" Inside ComponentDidMount");
    const url = "https://api.github.com/zen";
    let response = await axios.get(url);
    setTimeout(() => {
      this.setState({ quotes: response.data, isLoader: true });
    }, 3000);
  }

  componentDidUpdate() {
    console.log(" Inside ComponentDidUpdate");
  }
  render() {
    console.log("Inside Render");
    return (
      <div>
        {this.state.isLoader ?
          <div>
            <h1>Quotes</h1>
            <p>{this.state.quotes}</p>
          </div>
         :
          <div className="load">
            <div className="loader"></div>
          </div>
        }
      </div>
    );
  }
}

