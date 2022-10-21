import React from "react";

class Form extends React.Component{
    render(){
        return(
  <form onSubmit={this.handleSubmit}>
  <input type="text" on/>
  <button>Submit</button>
  </form>
        );
    }
}
export default Form
