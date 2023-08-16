import React, { useCallback, useState } from 'react'
import TodoList from './TodoList'

const Todo = () => {
    const [counter, setCounter] = useState(0)
    const [todos , setTodos] = useState([])

    const todosData =  useCallback(() => {
        setTodos([...todos,{id : todos.length + 1 , name : `Todo ${todos.length + 1}`}])

    },[todos])
     
    // const todosData = () => {
    //     setTodos([...todos,{id : 1, name : "Todo 1"}])
    // }

    const counterIncrement = () => {
        setCounter(counter => counter + 1)
    }

  return (
    <>
    <TodoList todos={todos}/>

    <button onClick={todosData}>Add Todos</button>
    <hr />
    {counter}
    <div>
        <button onClick={counterIncrement}>Increment Counter</button>
    </div>
    </>
  )
}

export default Todo