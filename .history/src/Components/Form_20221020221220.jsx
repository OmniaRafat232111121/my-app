import React from "react";

class Form extends React.Component{
    render(){
        return(
  <form onSubmit={handleSub}>
  <input type="text"/>
  <button>Submit</button>
  </form>
        );
    }
}
export default Form
