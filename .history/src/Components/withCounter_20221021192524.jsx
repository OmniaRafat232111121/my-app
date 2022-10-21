import React from 'react'

const updateCOmponent = (orginalComponent) => {
  class NewComponent extends React.Component{
    render(){
        return  <orginalComponent b/>
    
    }
  }
 return NewComponent
}

export default updateCOmponent
