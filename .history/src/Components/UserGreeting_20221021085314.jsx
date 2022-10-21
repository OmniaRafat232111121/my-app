import React from 'react'

class UserGreeting extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoggin:tru
        }
    }
    render(){
        return(
<div>
{
    this.state.isLoggin?
    <h1>welcome Omnia</h1>:
    <h2>Welcome Guest</h2>
}
</div>

        )
    }
}

export default UserGreeting
