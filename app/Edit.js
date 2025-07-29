'use client'
import { useState } from "react"
export default function EditToDo({id,currentTask,todos,setIsEdit}){
    
    const [newTask ,setNewTask] = useState(currentTask)
    const handleCancelBtn = () =>{
        setIsEdit(false)
    }
    const handleUpdatelBtn = () =>{
        todos.map((todo) =>{
            if(todo.id === id){
                todo.task = newTask
            }
            setIsEdit(false)     
        })
    }
    console.log(todos)
    return(
        <div className="edit-area">
            <h1 style={{marginBottom:"20px",color:"white"}}>Edit Task</h1>
            <input className="task-input" type="text" value={newTask} onChange={(e)=>{setNewTask(e.target.value)}}/>
            <div className="btns">
                <button className="cancel-btn" onClick={handleCancelBtn}>Cancel</button>
                <button className="update-btn" onClick={handleUpdatelBtn}>Update</button>
            </div>
        </div>

    
    )

}
