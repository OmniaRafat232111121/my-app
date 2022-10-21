import React from "react";

class Form extends React.Component{
    handleChange=()=>{
        console.lo
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
