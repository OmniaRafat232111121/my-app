import React from 'react'

const NameList = () => {
    const names=['omnia','ali','nahla','safa']
  return (
    <div>
      {
        names.map(name=>{
            <h2>{name}</h2>
        })
      }
    </div>
  )
}

export default NameList
