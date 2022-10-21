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
            username:e.target.value
        })

    }
    handleCommentsChange=(e)=>{
        this.setState({
            comment:e.target.value
        })
    }
    handleTopicChange = event => {
		this.setState({
			topic: event.target.value
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

 onChage={this.handleUserChange}
 />
 </div>

<div>
 <label>Comment</label>
 <input 
 type="text"
 
 onChange={this.handleCommentsChange}
 />
 </div>
 <div>
 <label>Topics</label>
 <select  onChange={this.handleTopicChange}>
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
