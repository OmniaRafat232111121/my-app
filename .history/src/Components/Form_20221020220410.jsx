import React from 'react'

const Form = () => {
    handleChange=()
  return (
    <div>
      <form>
      <input type="text" onChange={handleChange}/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
