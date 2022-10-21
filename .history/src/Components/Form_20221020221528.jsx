import React from "react";

class Form extends React.Component{
    state={
        name:"React Develooer"
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
  <p>{this.s}</p>
  <button>Submit</button>
  </form>
        );
    }
}
export default Form
