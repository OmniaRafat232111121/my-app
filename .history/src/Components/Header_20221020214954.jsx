import React from 'react'
class Header extends React.Component{
   constr
    render(){
        return(
         <>
         <h1>{this.props.name}</h1>
         </>
        );
    }
}
export default Header;