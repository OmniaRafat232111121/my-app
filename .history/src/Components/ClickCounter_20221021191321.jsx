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
        return{
            count:prevState.
        }
    })
  }
    render() {
    const {count}=this.state;
    return (
        <>

      <button onClick={this.incrementCount}>Click {count} times</button>
        </>
    )
  }
}

export default ClickCounter
