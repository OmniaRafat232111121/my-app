import React from 'react'
import COmponentC from './COmponentC'

const ComponentB = ({name}) => {
  return (
    <div>
      <h1>ComponentB</h1>
       <COmponentC name={n}/>
    </div>
  )
}

export default ComponentB
