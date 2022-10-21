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
    <h1>welco</h1>
}
</div>

        )
    }
}

export default UserGreeting
