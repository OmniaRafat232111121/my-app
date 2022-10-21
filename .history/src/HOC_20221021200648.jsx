import React,{useStat} from 'react'

const UpdatedComponent = (OrginalComponent) => {
  function NewComponent(){
    const [money,setMoney]=useState(10);
    const handleIncrease=()=>{
      setMoney(money*2);
    };
    return <OrginalComponent handleIncrease={handleIncrease} money={money}/>
  }
  return NewComponent;
}

export default UpdatedComponent;
