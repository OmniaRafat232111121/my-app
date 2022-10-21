import React, { Component } from 'react'

export class ParentComponent extends Component {
 
 constructor(props){
    super(props);
    this.state={
        name:'omnia'
    }
 }
 componentDidMount(){
    setInterval(()=>({
      this.setState({
        nam
      })
    },1000))
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
