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
        const sortedList=this.state.list.sort((a,b)=>{
          return a.createdAt-b.createdAt
        });
        this.setState({
            list: [...sortedList],
          });
    }
    
  sortByLatest() {
    const sortedList = this.state.list.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    this.setState({
      list: [...sortedList],
    });
  }

  addToEnd() {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [
      ...this.state.list,
      {id: nextId, createdAt: date},
    ];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  }

  addToStart() {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [
      {id: nextId, createdAt: date},
      ...this.state.list,
    ];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  }

render(){
    return(
        <div>
        <code>key=index</code>
        <br/><br/>
        <button>Add New TO Start</button>
        <button>Add New to End</button>
        <button onClick={this.sortByEarliest.bind(this)}>
        Sort by Earliest
      </button>
      <button onClick={this.sortByLatest.bind(this)}>
        Sort by Latest
      </button>
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