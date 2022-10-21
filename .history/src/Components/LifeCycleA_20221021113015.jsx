import React, { Component } from 'react'

export class LifeCycleA extends Component {
    constructor(props){
     super(props)
     this.state={
        name:'omnia'
     }
     console.log('LifecycleA from constructor')
    }
    static getDerviedStateFromProps(){
        console.log('LifeCyleA Get der')
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default LifeCycleA
