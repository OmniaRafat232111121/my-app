import React,{useState} from 'react'

const UseState = () => {
    const [inputValue, setInputValue] = useState();

    let onChange = (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);
    };
  
    return (
      <div>
        <input placeholder="enter something..." onChange={onChange} />
        {inputValue}
      </div>
    );
}

export default UseState
