'use client'
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import EditToDo from "../Edit";
const Task = ({ todos, setTodos }) => {
    const [taskId,setTaskId] = useState('')
    const [isEdit,setIsEdit] = useState(false) 
    const [taskToEdit,setTaskToEdit] = useState('')
    const handleDelete = (id) =>{
        if (isEdit === true){
          return;
        }
        todos.map((todo) =>{
            let copyTodos = todos.filter((todo) =>todo.id!==id)  
            setTodos(copyTodos)    
        })
    }
    const handleEdit = (id,currentTask) =>{
        todos.map((todo) =>{
            if (todo.id === id) {
              setTaskId(id)
              setTaskToEdit(currentTask)
              setIsEdit(true)
            }

        })
    }
  return (
    <div>
      {isEdit &&<EditToDo id={taskId} currentTask={taskToEdit}  todos={todos}  setIsEdit={setIsEdit}/>}
      {todos.map((todo,index) => (
        <div key={index} className="task-contanier">
          <div>
            <p className="task">{todo.task}</p>
          </div>
          <div className="icons">
            <FontAwesomeIcon className="trash" onClick={() =>handleDelete(todo.id)} icon={faTrash}></FontAwesomeIcon>
            <FontAwesomeIcon className="pen" onClick={() =>handleEdit(todo.id,todo.task)} icon={faPen}></FontAwesomeIcon>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
