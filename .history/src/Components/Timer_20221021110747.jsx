import React from 'react'
class Timer extends React.Component{
   constructor(props){
    super(props);
    this.state={
        timerValue:0,
    }
   }
   
   componentDidMount(){

   }
   upda
    render(){
        return(
<>
<h1>Timer:-{this.state.timerValue}</h1>
</>
        );
    }
}

export default Timer
