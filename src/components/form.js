import React from 'react';

const Form = ({ setInputtext , todos , setTodos , inputText })=>{

  const InputTextHandler = (e)=>{
    console.log(e.target.value)
    setInputtext(e.target.value)
  }

  const submitTodoHandler = (e)=>{
    e.preventDefault();
    setTodos([...todos, {text:inputText , completed:false, id:Math.random() *12}])
    setInputtext("")
  }


  
  return(
    <form>
        <input
        value={inputText}
        onChange={InputTextHandler} type="text" className= "todo-input" />
        <button onClick={submitTodoHandler} className = "todo-button" type = "submit" >
            Submit
            <i className ="fas fa-plus-square" ></i>
           
            </button>

            <div className = "select" >
                <select name='todos' className= 'filter-todo'>
                    <option value="all">All</option>
                    <option value= "completed">Completed</option>
                    <option value = "uncompleted">Uncompleted</option> 
                </select>
            </div>
    </form>
  )
}

export default Form;