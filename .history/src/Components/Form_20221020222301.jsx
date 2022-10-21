import React from "react";

class Form extends React.Component{
   constructor(){
    super()
    this.state={
        username:"",
        comment:
    }
   }
    handleChange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handleSubmit=(e)=>{
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
