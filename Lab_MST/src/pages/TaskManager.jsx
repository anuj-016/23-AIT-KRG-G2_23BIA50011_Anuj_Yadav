import { useState } from 'react';
import useForm from '../hooks/useForm';

function TaskManager() {
    const[tasks, setTasks]=useState([])

    const{values, handleChange, resetForm}=useForm({
        title:"",
        priority:"low"
    })

    const handleSubmit =(e)=>{
        e.preventDefault();

        if (values.title.trim() === "") {
            return;
        }

        const newTask ={
            title: values.title,
            priority: values.priority
        }

        setTasks((prev)=>[...prev,newTask])

        resetForm()
    }

    return(
        <div>
            <h2>Task Manager</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Task Title"
                    value={values.title}
                    onChange={handleChange}
                    style={{height: "25px"}}
                    required
                />
                
                <select
                    name="priority"
                    value={values.priority}
                    onChange={handleChange}
                    style={{height: "30px"}}
                >
                    
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                
                <button type="Submit" style={{padding:"10px",margin:"10px"}}>
                    Add Task
                </button>
            </form>
            <h3>Task List</h3>

            <ul>
                {tasks.map((task,index)=>(
                    <li key={index}>
                        {task.title}|{task.priority}
                    </li>
                ))}
            </ul>
        </div>
    )

}


export default TaskManager;