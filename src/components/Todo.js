import React from "react";

const Todo = ({ text, todo, todos, setTodos })=>{
    const deleteHandler = ()=>{
        setTodos(todos.filter((el)=> el.id !== todo.id))
    //     console.log(todo)
    }


    return (
        <div className="todo">
            <li className="todo-item"> {text }</li>
            <button className="complete-btn"><i className="fas fa-check">Edit</i></button>
            <button onClick={deleteHandler} className="complete-btn"><i className="fas fa-trash">Delete</i></button>
        </div>
    )
}

export default Todo;