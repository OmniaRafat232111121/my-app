import React from 'react'

const UserGreeting = (props) => {
  const cars=props.car;
    return (
    <div>
      <h1>Greeting</h1>
      {
        cars.length>0&&
        <h2>
    </h2>
      }
    </div>
  )
}

export default UserGreeting
