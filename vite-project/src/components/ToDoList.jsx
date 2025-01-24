import { useState } from "react";
import ToDoItem from "./ToDoItem";
import "./style.css"

function ToDoList(props){
    const [newTask, setnewTask] = useState("");

    function handleSubmit(){
        props.addTask(newTask);
        setnewTask("");
    }

    return(
        <div className="todolist">
            <input type="text" value={newTask} onChange={(e) => setnewTask(e.target.value)}/>
            <button type="submit" className="button1" onClick={handleSubmit}>Add</button>
            <ul>
                {props.tasks.map((task) => {
                    return <ToDoItem key={task.id} task={task} completedTask={props.completedTask} deleteTask={props.deleteTask} editTask={props.editTask}/>
                })}
            </ul>
        </div>
    )
}
export default ToDoList;