import React from 'react'

class UserGreeting extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoggin:yrue
        }
    }
    render(){
        return(
<div>
{
    this.state.isLoggin?
    <h1>welcome Omnia</h1>:
    <h2></h2>
}
</div>

        )
    }
}

export default UserGreeting
