import { useState } from "react";
import ToDoList from "./ToDoList";
import Header from "./Header";
import "./style.css";

function App(){
    const [tasks, settasks] = useState([]);

    const addTask = (task)=>{
        settasks([...tasks, {id: Date.now(), text: task, completed:false}]);
    }

    const completedTask = (id) =>{
        settasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    }

    const deleteTask = (id)=>{
        settasks(tasks.filter((task)=>task.id !== id));
    }

    const editTask = (id, newText)=>{
        settasks(tasks.map(task => task.id === id ? { ...task, text: newText }: task))
    }

    return(
        <div className="appContainer">
            <Header />
            <ToDoList tasks={tasks} addTask={addTask} completedTask={completedTask} deleteTask={deleteTask} editTask={editTask}/>
        </div>
    )
}

export default App;