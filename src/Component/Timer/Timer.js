import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props){
        super(props);
        // console.log("constructor")
        this.state={time:new Date()}
    }
    componentDidMount(){
        // console.log("Component Did Mount")

        this.timerId=setInterval(()=>{
            this.setState({time:new Date()})
        },1000)
    }
  render() {
      // console.log("render")
    return (
      <div>
        <h1>Timer</h1>
        <h1>{this.state.time.getSeconds()}</h1>
      </div>
    )
  }
}
