import React from 'react';
import Todo from './Todo';

const ToDoList = ({ todos , setTodos})=>{
    console.log(todos)
    return (
        <div className='todo-container'>

            <ul className='todo=list'>
                {todos.map((todo)=>(
                    <Todo key= {todo.id} text= {todo.text} todo={todo} setTodos={setTodos} todos= {todos}  />
                ))}

 

            </ul>
        </div>
    )
}

export default ToDoList;
