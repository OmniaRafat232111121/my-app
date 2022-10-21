import React from 'react'
class Header extends React.Component{
   constructor(){
    
   }
    render(){
        return(
         <>
         <h1>{this.props.name}</h1>
         </>
        );
    }
}
export default Header;