import { use } from "react"
import "./style.css"
import { useState } from "react"

function ToDoItem(props){
    const [isEditing, setisEditing] = useState(false);
    const [newText, setNewText] = useState(props.task.text);

    function handleEdit(){
        props.editTask(props.task.id, newText);
        setisEditing(false);
    }

    return (
        <>
            <li className="todoitem">
                {isEditing? <input type="text" onChange={(e)=> setNewText(e.target.value)} onBlur={handleEdit}/> : <span className="taskName">{props.task.text}</span>}
                {props.task.completed && <span className="checkIcon">✓</span>}
                <button className="button2" onClick={()=> !props.task.completed && props.completedTask(props.task.id)}>Completed</button>
                <button className="button2" onClick={() => props.deleteTask(props.task.id)}>Delete</button>
                <button className="button2" onClick={()=> setisEditing(true)}>Edit</button>
            </li>
        </>
    )
}

export default ToDoItem