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
        console.lo
        e.preventDefault();
    }
    render(){
        return(
  <form onSubmit={this.handleSubmit}>
  <input type="text" onChange={this.handleChange}/>
  <p>{this.state.name}</p>
  <button>Submit</button>
  </form>
        );
    }
}
export default Form
