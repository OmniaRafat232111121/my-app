import React, { Component } from 'react'

export class ParentComponent extends Component {
 
 constructor(props){
    super(props);
    this.state={
        name:''
    }
 }
 
    render() {
    return (
      <div>
        <h1>ParenTCOmponent</h1>
      </div>
    )
  }
}

export default ParentComponent
