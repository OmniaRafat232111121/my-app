import React from 'react'

const Form = () => {
    const handleChange=(e)=>{
    
    }
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
