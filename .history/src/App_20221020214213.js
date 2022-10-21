import React from 'react'
import Content from './Components/Content';
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
      <Content/>
    </>
    );
  }
}

export default App
