import React from 'react'

const Items = (props) => {
 const {id,name,age}=props
  return (
    <div>
      <h1>{id}</h1>
      <h1>{age}</h1>
      <h1>{name}</h1>
    </div>
  )
}

export default Items
