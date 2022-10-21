const ToDo=props=>{
    <tr>

    </tr>
}

class ToDoList extends React.Component {
render(){
    return(
        <div>
        <code>key=index</code>
        <br/>
        <button>Add New TO Start</button>
        <button onClick={this.addToEnd.bind(this)}>
          Add New to End
        </button>
        </div>

    );
}


}
export default ToDoList;