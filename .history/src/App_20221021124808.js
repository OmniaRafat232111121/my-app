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
    console.log("Mount")
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
  render(){
    console.log('render')
    return(
      <>
      <h1></h1>

    </>
    );
  }
}

export default App
