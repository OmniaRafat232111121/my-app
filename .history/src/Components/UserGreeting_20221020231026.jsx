import React from 'react'

const UserGreeting = (props) => {
    return (
    <div>
      <h1>Greeting</h1>
      {
        cars.length>0&&
        <h2>
        You have {props} cars in your garage.
      </h2>
      }
    </div>
  )
}

export default UserGreeting
