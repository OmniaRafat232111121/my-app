import React,{memo} from 'react'

const Todos = ({todos,addTodo}) => {
  return (
    <div>
      <h2>My TodDos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={}>AddTodo</button>
      
    </div>
  )
}

export default Todos
