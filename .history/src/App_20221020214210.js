import React from 'react'
import Header from './Components/Header'

class App  extends React.Component {
  state={
    name:'omnia',
    age:22
  }
  render(){
    return(
      <>
      <Header name="Hello React"/>
      <p>{this.state.name}</p>
      <Co
    </>
    );
  }
}

export default App
