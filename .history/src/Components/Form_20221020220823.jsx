import React from 'react'

const Form = () => {
  const handleChange=(e)=>{
        console.log(e.taraget.value)
    
    }
  return (
    <div>
      <form onSubmit={handleSub}> 
      <input type="text" onChange={handleChange}/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
