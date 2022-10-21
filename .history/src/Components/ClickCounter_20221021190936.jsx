import React, { Component } from 'react'

export class ClickCounter extends Component {
  constructor(props){
    super(props)
    this.state={
        count:0
    }
  }
  incrementCount=()=>{
    this.setState(prevStat{
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
