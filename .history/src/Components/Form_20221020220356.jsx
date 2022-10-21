import React from 'react'

const Form = () => {
  return (
    <div>
      <form>
      <input type="text" onChange={handleChan}/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
