import React from 'react'

const Items = (props) => {
const {items}=this.props;
const itemList=items.map((item)=>{
    <h1>{item.id}</h1>
})
  return (
    <div>
      {itemList}
    </div>
  )
}

export default Items
