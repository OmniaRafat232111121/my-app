import React from 'react'

const Items = (props) => {
const {items}=this.props;
const itemList=items.map((item)=>{
    return(
        <div>
        <p>{item.id}</p>
        <p>{item.name}</p>
        <p>{item.a}</p>
        </div>
    )
})
  return (
    <div>
      {itemList}
    </div>
  )
}

export default Items
