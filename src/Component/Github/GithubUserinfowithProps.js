import axios from "axios";
import React, { Component } from "react";

export default class GithubUserinfowithProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);
    this.setState({ user: response.data });
    // console.log(response.data);
  }
  render() {
    return (
      <div>
        <h1>{this.props.tittle}</h1>
        <h1>{this.state.user.name}</h1>
        <p>{this.state.user.bio}</p>
        <img src={this.state.user.avatar_url}></img>
      </div>
    );
  }
}
