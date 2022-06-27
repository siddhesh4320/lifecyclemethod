import axios from 'axios';
import React, { Component } from 'react'

export default class GithubUserinfo extends Component {
    constructor(props){
        super(props);
        this.state={
            user:{},
        }
    }
    // async version
    async componentDidMount(){
        const url =`https://api.github.com/users/elie`
        let response = await axios.get(url)
        this.setState({user:response.data})
        // console.log(response.data)
    }

    // componentDidMount(){
    //     axios.get("https://api.github.com/users/elie").then((response)=>{
    //         console.log(response)
    //         this.setState({user:response.data});
    //     })
    // }
    //--
    // componentDidMount(){
    //     axios.get("https://api.github.com/users/elie").then((response)=>{
    //         console.log(response)
    //         let user =response.data
    //         this.setState({user});
    //     })
    // }
  render() {
    return (
      <div>
        <h1>{this.state.user.name}</h1>
        <p>{this.state.user.bio}</p>
        <img src={this.state.user.avatar_url}></img>
      </div>
    )
  }
}
