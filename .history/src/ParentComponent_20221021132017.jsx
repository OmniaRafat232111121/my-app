import React, { Component } from 'react'

export class ParentComponent extends Component {
 
 constructor(props){
    super(props);
    this.state={
        name:'omnia'
    }
 }
 componentDidMount(){
   setInterval(() => {
    this.setState({
        name:'ali'
    })
   }, 1000);
 }
 
    render() {
    return (
      <div>
        <h1>ParenTCOmponent</h1>
        <R
      </div>
    )
  }
}

export default ParentComponent
