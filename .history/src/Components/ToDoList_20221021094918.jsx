import React from "react";
import ToDo from "./ToDo";
class ToDoList extends React.Component {
    constructor(){
        super();
        const date = new Date();
        const todoCounter = 1;
        this.state={
            todoCounter:todoCounter,
            list: [
                {
                  id: todoCounter,
                  createdAt: date,
                }
            ]
        }
    }
    sortByEarlist(){
        const sortedList=
    }
render(){
    return(
        <div>
        <code>key=index</code>
        <br/><br/>
        <button>Add New TO Start</button>
        <button>Add New to End</button>
        <button>SOrt By Earlist</button>
        <button>Sort By latest</button>
        <table>
        <tr>
          <th>Index</th>
          <th>ID</th>
          <th>Item</th>
          <th>Created at</th>
        </tr>
        {this.state.list.map((todo, index) => (
          <ToDo key={index} index={index} {...todo} />
        ))}
      </table>
        
        </div>

    );
}


}
export default ToDoList;