import React from 'react'
class Timer extends React.Component{
   constructor(props){
    super(props);
    this.state={
        timerValue:0,
    }
   }
   
   componentDidMount(){
 const timer= setInterval(()=>{
    this.updateTimer()
  },1000)

   }
   updateTimer(){
    const {timerValue}=this.state;
    this.setState({
        timerValue:timerValue+1
    })
   }
componentWillUnmount(){
    clearInterval()
}
    render(){
        const {timerValue}=this.state;
        return(
<>
<h1>Timer:-{timerValue}</h1>
</>
        );
    }
}

export default Timer
