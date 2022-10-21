import React from "react";
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
render(){
    return(
        <div>
        <code>key=index</code>
        <br/><br/>
        <button>Add New TO Start</button>
        <button>Add New to End</button>
        <button>SOrt By Earlist</button>
        <button>Sort By latest</button>
        <tabel>
        <br/> <br/>
        <tr>
        <th>Index</th>
        <th>ID</th>
        <th>Item</th>
        <th>Creted at</th>
        </tr>
        </tabel>
        {this.state.list.map((todo,index)=>(
        
        ))}
        </div>

    );
}


}
export default ToDoList;