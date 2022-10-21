import React from 'react'
class Header extends React.Component{
   constructor(){
    super();
    this.state={
        message:"Good Morning"
    }
   }
   const 
    render(){
        return(
         <>
         <p>{this.state.message}</p>
         <h1>{this.props.name}</h1>
         <button onClick={handleSubmit}>Subscribe</button>
         </>
        );
    }
}
export default Header;