import React from 'react'

const Person = ({person}) => {
  return (
    <div>
      <h2>I am {person.name} and myAge is {person.age} and I know mySkills {person.name}</h2>
    </div>
  )
}

export default Person
