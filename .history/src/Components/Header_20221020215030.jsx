import React from 'react'
class Header extends React.Component{
   constructor(){
    super();
    this.state={
        message:"Good Morning"
    }
   }
    render(){
        return(
         <>
         <p></p>
         <h1>{this.props.name}</h1>
         </>
        );
    }
}
export default Header;