const ToDo=props=>{
    <tr>

    </tr>
}

class ToDoList extends React.Component {
    constructor(){
        super();
        const date=new Date();
        this.state={
            todoCounter:todoCounter,
            
        }
    }
render(){
    return(
        <div>
        <code>key=index</code>
        <br/>
        <button>Add New TO Start</button>
        <button>Add New to End</button>
        <button>SOrt By Earlist</button>
        <button>Sort By latest</button>
        <tabel>
        <tr>
        <th>Index</th>
        <th>ID</th>
        <th>Item</th>
        <th>Creted at</th>
        </tr>
        </tabel>
        </div>

    );
}


}
export default ToDoList;