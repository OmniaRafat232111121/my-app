import React from 'react'
class Timer extends React.Component{
   constructor(props){
    super(props);
    this.state={
        timerValue:0,
    }
   }
   
   
    render(){
        
        return(
<>
<h1>Timer:-{this.s}</h1>
</>
        );
    }
}

export default Timer