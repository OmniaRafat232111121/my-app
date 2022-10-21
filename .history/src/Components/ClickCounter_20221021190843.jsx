import React, { Component } from 'react'

export class ClickCounter extends Component {
  constructor(){
    super(props)
    this.state={
        count:0
    }
  }
  incrementCount=()=>{
    this.setState({
        count:
    })
  }
    render() {
    return (
      <button onClick={this.incrementCount}>Click X times</button>
    )
  }
}

export default ClickCounter
