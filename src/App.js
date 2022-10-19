import React , { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import Form from './components/form';
import ToDoList from './components/TodoList';

function App() {
    const [inputText , setInputtext] = useState("");
    const [todos , setTodos] = useState([]);
    // let newTodos = ["1","2"]
    
    
    // useEffect(() => {
    //     setTodos([...newTodos, newTodos.length+1])
    //     console.log(todos);
    // }, [inputText]);

    // const updateTest = (newtext)=>{
    //     setInputtext
    // }

    return (
         <div className = "App">
            <header>
                <h1> Ed's to do List {inputText}</h1>
            </header>
        
           <Form  todos ={todos} setTodos={setTodos} setInputtext ={setInputtext} inputText={inputText} />
           <ToDoList todos = {todos} setTodos={setTodos} />
        </div > 
    );
}

export default App;