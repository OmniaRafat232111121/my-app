import React,{memo} from 'react'

const Todos = ({todos,addTodo}) => {
  return (
    <div>
      <h2>My TodDos</h2>
      {todos.map(())}
      
    </div>
  )
}

export default Todos
