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
    handleUserChange=(e)=>{
        this.setState({
            username:e.target.v
        })

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
 <label>Topics</label>
 <select value={topic} onChange={this.handleTopicChange}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
 </div>
  <button type="submit">Submit</button>
  </form>
        );
    }
}
export default Form
