import React from 'react'

const Form = () => {
   handleChange=(e)=>{
        console.log(e.taraget.value)
    
    }
     handleSubmit=(e)=>{
        e.preventDefault();

    }
  return (
    <div>
      <form onSubmit={thhandleSubmit}> 
      <input type="text" onChange={this.handleChange}/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default Form