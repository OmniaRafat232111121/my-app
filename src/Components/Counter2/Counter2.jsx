import React ,{ Component } from 'react'


export class Counter2 extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
     }
    handleCounter=()=>{
        this.setState(prevState=>{
            return{
            count:prevState.count+1
        }});
    }
    render() {
    return (
        <div>
               <button onClick={this.handleClick}>Click{this.state.count}</button>
        </div>
    )
}

}
export default Counter2
