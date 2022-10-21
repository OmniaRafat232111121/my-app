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
      <button>Click X </button>
    )
  }
}

export default ClickCounter
