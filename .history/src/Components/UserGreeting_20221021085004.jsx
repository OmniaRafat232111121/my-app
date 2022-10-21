import React from 'react'

class UserGreeting extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoggin:false
        }
    }
    render(){
        return(
<div>
{
    isLoggin&&{
        <h1>We</h1>
    }
}
</div>

        )
    }
}

export default UserGreeting
