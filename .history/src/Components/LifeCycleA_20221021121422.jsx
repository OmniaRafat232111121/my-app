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
        this.setState({
            time:new Date
        })
      }, 1000);
        
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleA componentDidUpdate')
	}
  render() {
    console.log('LifeCycle Render')
    return (
      <div>
      <button onClick={this.changeState}>Change state</button>
   <h1>Time is {this.state.time.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default LifeCycleA
