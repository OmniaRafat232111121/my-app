import React from 'react'

class UserGreeting extends React.Component{
    render(){
        constructor(props){
            super(props)
            this.state={
                isLoggin:false
            }
        }
        return(
            <div>
<h1>Hello</h1>
            </div>

        )
    }
}

export default UserGreeting
