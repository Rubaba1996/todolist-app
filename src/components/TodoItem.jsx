import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'

const TodoItem = ({todo, toggleTask , removeTask}) => {
  return (
    <div>
    <div className={todo.completed ? 'todo-row complete' : 'todo-row'}
    onClick={()=>toggleTask(todo.id)} 
    >
    {todo.task}
   
    </div>
    <div className='iconsContainer'>
     <RiCloseCircleLine onClick={()=>removeTask(todo.id)}/>
    </div>  
    </div>
  )
}

export default TodoItem