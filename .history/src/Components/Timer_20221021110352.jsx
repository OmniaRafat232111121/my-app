import React from 'react'
class Timer extends React.Component{
   constructor(props){
    super(props);
    this.state={
        timerValue:0,
    }
   }
   
   
    render(){
        const {timerValue}=this.st
        return(
<>
<h1>Timer:-{timerValue}</h1>
</>
        );
    }
}

export default Timer
