import React from "react";

class Form extends React.Component{
    handleChange=(e)=>{
        console.log(e.target.value)
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
