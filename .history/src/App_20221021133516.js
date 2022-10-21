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

import React from 'react'


const App = () => {
  return (
    <div>
     <PureComponent/>
    </div>
  )
}

export default App
