import React from "react";

class Form extends React.Component{
    state={
        name:"React Develoo"
    }
    handleChange=(e)=>{
        this.setState({
            name:''
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
    }
    render(){
        return(
  <form onSubmit={this.handleSubmit}>
  <input type="text" onChange={this.handleChange}/>
  <button>Submit</button>
  </form>
        );
    }
}
export default Form
