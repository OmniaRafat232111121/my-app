import React from 'react'

const Form = () => {
  c handleChange=(e)=>{
        console.log(e.taraget.value)
    
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

    }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
      <input type="text" onChange={this.handleChange}/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
