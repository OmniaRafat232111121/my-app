import React from "react";
class Items extends React.Component{
    render(){
        const {items}=this.props;
        const itemList=items.map((index,item)=>{
            return(
                <div key={item}>
            {item.id}
            {item.name}
            {item.age}
                </div>
            )
        }) 
        return(
       <>
       <h1>{itemList}</h1>
       </>
        );
    }
}
export default Items