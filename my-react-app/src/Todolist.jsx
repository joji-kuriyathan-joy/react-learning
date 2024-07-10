
import React, { useState } from 'react'
function Todolist() {

    const [tasks, setTasks] = useState(["East Brelfast", "Taske a shower"]);
    const [newTask, setNewTask] = useState("");


    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function handleAddTask() {
        if(newTask.trim() !==""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

      
    }

    function deleteTask(index) {
        const updatedtask = tasks.filter((_,idx) => idx !== index);
        setTasks(updatedtask)
    }

    function moveTaskUp(index) {
        if(index > 0){
            const updatedtask = [...tasks];
            [updatedtask[index], updatedtask[index-1]] 
            = [updatedtask[index-1], updatedtask[index]];
            setTasks(updatedtask);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length -1){
            const updatedtask = [...tasks];
            [updatedtask[index], updatedtask[index+1]] 
            = [updatedtask[index+1], updatedtask[index]];
            setTasks(updatedtask);
        }
    }
    return (<div className='todolist'>
        <h1> To Do List</h1>
        <div>
            <input
                type='text'
                placeholder='Enter a task ...'
                value={newTask}
                onChange={handleInputChange}
            />

            <button className='add-btn'
                onClick={handleAddTask}>Add</button>
        </div>
        <ol>

            {tasks.map((task, index) =>
                <li key={index}>
                    <span className='todotext'> {task}</span>
                    <button className='delete-btn'
                        onClick={() => deleteTask(index)}>
                        ❌
                    </button>
                    <button className='move-btn'
                        onClick={() => moveTaskUp(index)}>
                        👆
                    </button>
                    <button className='move-btn'
                        onClick={() => moveTaskDown(index)}>
                        👇
                    </button>
                </li>)}
        </ol>

    </div>)
}

export default Todolist;