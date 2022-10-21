import React,{useState} from 'react'

const Person1 = () => {
    const [money,setMoney]=useState(10);
  const handleIncrease=()=>{
    setMoney(money*2);
  }
    return (
    <div>
      <h2>Omnia is offered is ${money}</h2>
    <button onClick={handleIncrease}>IncreaseMoney</button>
      </div>
  )
}

export default Person1
