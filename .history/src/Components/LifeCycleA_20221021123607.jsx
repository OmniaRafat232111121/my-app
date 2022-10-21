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
    static getDerivedStateFromProps(props, state) {
		console.log('LifecycleA getDerivedStateFromProps')
		return null
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
      {
        /*
      }
        
      
   
      </div>
    )
  }
}

export default LifeCycleA
