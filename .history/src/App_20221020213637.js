import React from 'react'
import Header from './Components/Header'

class App  extends React.Component {
  state={
    name:'omnia',
    
  }
  render(){
    return{
      <>
      <Header name="Hello React"/>
      <p>{this.state.name}</p>
    </>
    }
  }
}

export default App
