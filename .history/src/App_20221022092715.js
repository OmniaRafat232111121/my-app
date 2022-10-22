// import React from 'react'
// import { PureComponent } from 'react/cjs/react.production.min';
// import Content from './Components/Content';
// import Form from './Components/Form';
// import Header from './Components/Header'
// import Items from './Components/Items';
// import LifeCycleA from './Components/LifeCycleA';
// import NameList from './Components/NameList';
// import Timer from './Components/Timer';
// import ToDoList from './Components/ToDoList';
// import UserGreeting from './Components/UserGreeting';
// import Welcome from './Welcome';

// class App  extends React.Component {
//   constructor(){
//     super();
//     console.log('Constructor')
//   }
//   componentDidMount(){
//     console.log("component Dis Mount")
//   }
//   componentDidUpdate(prevProps, prevState) {
// 		console.log('componentDidUpdate')
// 	}
//   state={
//     items:[
//         {id:11,name:'omnia',age:81},
//         {id:1,name:'omnia',age:81},
//         {id:1,name:'omnia',age:81}
//     ]
// }
// handleClick=(e)=>{
//   let items=this.state.items;
//   items.push({id:22,name:'ali',age:66})
//   this.setState({
//       items:items
//   })
// }
// handleDelete=(e)=>{
//   let items=this.state.items;
//   this.setState({
//    items:[
//     {id:11,name:'omnia',age:81}
//    ]
//   })
// }
//   render(){
//     console.log('render')
//     return(
//       <>
//       // <h1>LifecycleComponent</h1>
//       // <button onClick={this.handleClick}>Add</button>
//       // <button onClick={this.handleDelete}>Delete</button>
//        <PureComponent/>
//     </>
//     );
//   }
// }

// export default App

import React,{useState} from 'react'
import { PureComponent } from 'react/cjs/react.development'
import ClickCounter from './Components/ClickCounter'
import ComponentA from './Components/ComponentA'
import ComponentB from './Components/ComponentB'
import Effect from './Components/Effect/Effect'
import LoginFOrm from './Components/LoginFOrm'
import Person1 from './Components/Person1'
import Person2 from './Components/Person2'
import UseState from './Components/useState/UseState'


const App = () => {
  const [name,setName]=useState('ALgorthim Academy')
  return (
    <div>
{
  /*
}

    </div>
  )
}

export default App
