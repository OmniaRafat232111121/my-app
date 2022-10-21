import React, { Component } from 'react'

export class ClickCounter extends Component {
  constructor(props){
    super(props)
    this.state={
        count:0
    }
  }
  incrementCount=()=>{
    this.setState(prevState=>{
        count:prevState.count+1
    })
  }
    render() {
    return (
        <p>{this.state.}</p>
      <button onClick={this.incrementCount}>Click X times</button>
    )
  }
}

export default ClickCounter
