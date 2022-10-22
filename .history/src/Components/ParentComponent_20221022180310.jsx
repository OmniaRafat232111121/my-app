import React from 'react'
import Button from './Button'
const ParentComponent = () => {
  return (
    <div>
      <Button onClick={increment}>
      INCREMENT
      </Button>
    </div>
  )
}

export default ParentComponent
