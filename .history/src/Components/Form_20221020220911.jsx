import React from 'react'

const Form = () => {
  const handleChange=(e)=>{
        console.log(e.taraget.value)
    
    }
    const 
  return (
    <div>
      <form onSubmit={handleSubmit}> 
      <input type="text" onChange={handleChange}/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
