import React from 'react'

const NameList = () => {
const names=['omnia','ali','nahla','safa']
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

     (
    <div>
      {
       persons.map(person=>{
        <h1
       }
        )
      }
      
    </div>
  )
}

export default NameList
