import React from 'react'
import Person from './Person'

const NameList = () => {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const persons = [
      {
        id: 1,
        name: 'Bruce',
        age: 30,
        skill: 'React'
      },
      {
        id: 2,
        name: 'Clark',
        age: 25,
        skill: 'Angular'
      },
      {
        id: 3,
        name: 'Diana',
        age: 28,
        skill: 'Vue'
      }
    ]
    const nameList=names.map(person=>{
        <Person key={person.id}/>
    })
  return <div>{personList}</div>
}

export default NameList

