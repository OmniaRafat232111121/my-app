import React, { Component } from 'react'

export class LifeCycleA extends Component {
    constructor(props){
     super(props)
     this.state={
        name:'omnia'
     }
     console.log('LifecycleA from constructor')
    }
    static getDerviedStateFromProps(p){
        console.log('LifeCyleA Get dervied statefromProps')
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default LifeCycleA