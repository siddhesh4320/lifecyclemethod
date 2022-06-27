import axios from 'axios';
import React, { Component } from 'react'

export default class ZenQuote extends Component {
    constructor(props){
        super(props);
        console.log("Inside Constructor")
        this.state={
            quote:""
        };
    }
    // async version
    async componentDidMount(){
      console.log("DidMount")
        const url ="https://api.github.com/zen"
        let response =await axios.get(url)
        // console.log(response)
        this.setState({quote:response.data})
    }
    //-----------------
    // componentDidMount(){
    //   //load data  
    //   axios.get("https://api.github.com/zen").then((response)=>{
    //     // console.log(response)
    //     this.setState({quote:response.data});
    //   });
    //   //set state with their data
    // }
    componentDidUpdate(){
        console.log("Inside Component Did Update")
    }
  render() {
      console.log("Inside Render")
      return (
      <div>
        <h1> Quotes</h1>
        <p>{this.state.quote}</p>
      </div>
    )
  }
}
