import React from 'react'

const UserGreeting = (props) => {
  const cars=props.car;
    return (
    <div>
      <h1>Greeting</h1>
      {
        cars
      }
    </div>
  )
}

export default UserGreeting
