import React from 'react'

const Items = (props) => {
const {items}=this.props;
const itemList=items.map((index,item)=>{
    <h1 key={index}>{item.}</h1>
})
  return (
    <div>
      {itemList}
    </div>
  )
}

export default Items
