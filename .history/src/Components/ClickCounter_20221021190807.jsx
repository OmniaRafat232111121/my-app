import React, { Component } from 'react'

export class ClickCounter extends Component {
  constructor(){
    super(props)
    this.state={
        count:0
    }
  }
  
    render() {
    return (
      <button onClick={}>Click X times</button>
    )
  }
}

export default ClickCounter
