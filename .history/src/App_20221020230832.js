import React from 'react'
import Content from './Components/Content';
import Form from './Components/Form';
import Header from './Components/Header'
import Welcome from './Welcome';

class App  extends React.Component {
  
  render(){
    <h2>
          You have {cars.length} cars in your garage.
        </h2>
    return(
      <>
      <Form/>
      <Welcome name="omnia" job="frontendDeveloper"/>
   
    </>
    );
  }
}

export default App
