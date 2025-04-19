import React, { useState } from "react";
import './TodoList.css'; 

function TodoList(){

    const [tasks,setTasks] = useState(["eat","sleep","code"]); 
    const [newtask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        setTasks(t => [...t, newtask]);
        setNewTask(" ");

    }
    function deleteTask(index){
        const updatedTasks  = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
        setNewTask(" ");// Clear the input field after deleting a task 


    }
    function moveTaskUp(index){
        if (index > 0) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index - 1];
            updatedTasks[index - 1] = temp;
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if (index < tasks.length - 1){
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index + 1];
            updatedTasks[index + 1] = temp;
            setTasks(updatedTasks);
        }

    }

    return(
        <div className="todo-list">

            <h1>TodoList</h1>
            <div className="Todolist-container">
                    <input 
                    type="text" 
                    placeholder="Enter your task..."
                    onChange={ handleInputChange } />
                    <button 
                    className="add-btn"
                    onClick={addTask}>
                    Add
                    </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span> {task} </span>
                        
                        <button
                        className="delete-btn"
                        onClick={() => deleteTask(index)}>
                        Delete</button>

                        <button
                        onClick={() => moveTaskUp(index)}
                        className="move-btn">
                            👆🏻
                        </button>

                        <button
                        onClick={() => moveTaskDown(index)}
                        className="move-btn"> 👇🏻
                        </button>
                    </li>
                )}
            </ol>

        </div>
    );
}
export default TodoList;