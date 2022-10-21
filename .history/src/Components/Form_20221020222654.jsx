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
 value={username}
 onChage={this.handleUserChange}
 />
 </div>

<div>
 <label>Comment</label>
 <input 
 type="text"
 value={comments}
 onChage={this.handleCommentsChange}
 />
 </div>
 <div>
 <label>To</label>
 </div>
  <button>Submit</button>
  </form>
        );
    }
}
export default Form
