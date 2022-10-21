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
    isLoggin
}
</div>

        )
    }
}

export default UserGreeting
