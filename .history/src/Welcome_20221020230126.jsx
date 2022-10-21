import React from "react";
class Welcome extends React.Component{
   const {name,job}=this.props;
    render(){
        return(
<>
<p>Hello Girl This my {name}</p>
</>
        );
    }
}
export default Welcome