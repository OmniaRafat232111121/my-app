import React from 'react'
import Content from './Components/Content';
import Form from './Components/Form';
import Header from './Components/Header'
import Items from './Components/Items';
import NameList from './Components/NameList';
import ToDoList from './Components/ToDoList';
import UserGreeting from './Components/UserGreeting';
import Welcome from './Welcome';

class App  extends React.Component {
  state={
    item:[
      {id:1,name:'omnia',age:11},
      {id:1,name:'omnia',age:12},
      {id:1,name:'omnia',age:11}
    ]
  }
  render(){
    
    return(
      <>
<Items id="1" name="omnia" age="22"/>
   
    </>
    );
  }
}

export default App
