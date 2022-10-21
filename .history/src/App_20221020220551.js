import React from 'react'
import Content from './Components/Content';
import Form from './Components/Form';
import Header from './Components/Header'

class App  extends React.Component {
  state={
    name:'omnia',
    age:22
  }
  render(){
    return(
      <>
      {/*    
    }
 
      <Form/>
    </>
    );
  }
}

export default App
