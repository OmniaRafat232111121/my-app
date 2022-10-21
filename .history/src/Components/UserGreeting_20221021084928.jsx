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
<h1>Weclome Gu</h1>
</div>

        )
    }
}

export default UserGreeting
