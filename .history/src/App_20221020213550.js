import React from 'react'
import Header from './Components/Header'

class App  extends React.Component {
  
  return (
    <div>
      <Header name="Hello React"/>
      <p>{this.state.name}</p>
    </div>
  )
}

export default App
