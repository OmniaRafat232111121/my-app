import React, { Component } from 'react'

export class LifeCycleA extends Component {
    constructor(props){
     super(props)
     this.state={
        name:'omnia'
     }
     console.log('LifecycleA from constructor')
    }
    static getDerviedStateFromProps(props,state){
        console.log('LifeCyleA rvied statefromProps')
        return null;
    }
    componentDidMount(){
        console.log('LifeCycleA DidMount')
    }
  render() {
    console.log('LifeCycle Render')
    return (
      <div>
        <h1>Helel</h1>
      </div>
    )
  }
}

export default LifeCycleA
