import React, { Component } from 'react'

export class LifeCycleA extends Component {
    constructor(props){
     super(props)
     this.state={
        name:'omnia',
        time:new Date
     }
     console.log('LifecycleA from constructor')
    }
    static getDerviedStateFromProps(props,state){
        console.log('LifeCyleA getDrivied statefromProps')
        return null;
    }
    componentDidMount(){
        console.log('LifeCycleA DidMount')
      setInterval(() => {
        
      }, 1000);
        
    }
  render() {
    console.log('LifeCycle Render')
    return (
      <div>
   <h1>Time is {this.state.time.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default LifeCycleA
