import React from "react";

class Form extends React.Component{
   constructor(){
    super()
    this.state={
        username:"",
        comment:'',
        topic:'react'
    }
   }
    
    handleSubmit=(e)=>{
        
        e.preventDefault();
    }
    render(){
        return(
  <form onSubmit={this.handleSubmit}>
 <div>
 </div>
  <button>Submit</button>
  </form>
        );
    }
}
export default Form
