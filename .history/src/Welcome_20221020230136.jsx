import React from "react";
class Welcome extends React.Component{
  
    render(){
        const {name,job}=this.props;
        return(
<>
<p>Hello Girl This my {name} and</p>
</>
        );
    }
}
export default Welcome