import React from "react";

class Form extends React.Component{
    render(){
        return(
  <form onSubmit={this.handleSubmit}>
  <input type="text"/>
  <button>Submit</button>
  </form>
        );
    }
}
export default Form
