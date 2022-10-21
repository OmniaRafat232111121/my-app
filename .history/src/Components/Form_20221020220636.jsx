import React from 'react'

const Form = () => {
  co handleChange=(e)=>{
        console.log(e.taraget.value)
    
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
