import React from 'react'

class UserGreeting extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoggin:fal
        }
    }
    render(){
        return(
<div>
{
    this.state.isLoggin?
    <h1></h1>
}
</div>

        )
    }
}

export default UserGreeting
