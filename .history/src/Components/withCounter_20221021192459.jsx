import React from 'react'

const updateCOmponent = (orginalComponent) => {
  class NewComponent extends React.Component{
    render(){
        return  <orginalComponent/>
    
    }
  }
 return NewComponent
}

export default updateCOmponent
