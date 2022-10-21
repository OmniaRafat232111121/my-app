import React from 'react'
import Content from './Components/Content';
import Form from './Components/Form';
import Header from './Components/Header'
import Items from './Components/Items';
import LifeCycleA from './Components/LifeCycleA';
import NameList from './Components/NameList';
import Timer from './Components/Timer';
import ToDoList from './Components/ToDoList';
import UserGreeting from './Components/UserGreeting';
import Welcome from './Welcome';

class App  extends React.Component {
  constructor(){
    super();
    console.log('Constructor')
  }
  componentDidMount(){
    console.log("component Dis Mount")
  }
  componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate')
	}
  state={
    items:[
        {id:1,name:'omnia',age:81},
        {id:1,name:'omnia',age:81},
        {id:1,name:'omnia',age:81}
    ]
}
handleClick=(e)=>{
  let items=this.state.items;
  items.push({id:22,name:'ali',age:66})
  this.setState({
      items:items
  })
}
handleD=(e)=>{
  let items=this.state.items;
  items.push({id:22,name:'ali',age:66})
  this.setState({
      items:items
  })
}
  render(){
    console.log('render')
    return(
      <>
      <h1>LifecycleComponent</h1>
      <button onClick={this.handleClick}>Add</button>
      <button>Delete</button>

    </>
    );
  }
}

export default App
