import React from 'react'

const UpdatedComponent = () => {
  function NewComponent(){
    const [money,setMoney]=useState(10);
    const handleIncrease=()=>{
      setMoney(money*2);
    };
  }
  return NewComponent;
}

export default UpdatedComponent;
