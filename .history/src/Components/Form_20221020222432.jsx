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
 <label>username</label>
 <input 
 type="text"
 />
 </div>
  <button>Submit</button>
  </form>
        );
    }
}
export default Form
