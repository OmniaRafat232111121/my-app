import React from "react";
class Items extends React.Component{
    render(){
        const {items}=this.props;
    
        return(
       <>
      <table>
      <tr>
              <th>ID</th>
              <th>name</th>
              <th>age</th>
      </tr>
      {this.state.map((item)=>{
        return(
            <>
            <h1>
            {item.id}
            {item.name}
            {item.age}
            </h1>
            </>

        )
      })}
      </table>
       </>
        );
    }
}
export default Items;