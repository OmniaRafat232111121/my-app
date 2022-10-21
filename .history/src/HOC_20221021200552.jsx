import React from 'react'

const UpdatedComponent = (OrginalComponent) => {
  function NewComponent(){
    const [money,setMoney]=useState(10);
    const handleIncrease=()=>{
      setMoney(money*2);
    };
    return <OrginalComponent handleIncrease={handleIncrease} mone/>
  }
  return NewComponent;
}

export default UpdatedComponent;
