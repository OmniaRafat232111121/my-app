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
<h1>Weclom</h1>
</div>

        )
    }
}

export default UserGreeting
