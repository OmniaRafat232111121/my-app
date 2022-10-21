import React from "react";
class Items extends React.Component{
    render(){
        const {items}=this.props;
        const itemList=items.map((item)=>{
            return(
                <div>
            {item.id}
            {item.name}
            {item.age}
                </div>
            )
        }) 
        return(
       <>
      <table>
      <tr>
              <th>ID</th>
              <th>name</th>
              <th>age</th>
      </tr>
      {this.state.map((item)=>{
        retu
      })}
      </table>
       </>
        );
    }
}
export default Items;