import React from 'react'

const ToDo = (props) => {
  return (
    <>
      <tr>
      <td>
      <label>{props.index}</label>
      </td>
      <td>
      <label>{props.i}</label>
      </td>
      </tr>
    </>
  )
}

export default ToDo
