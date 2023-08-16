import React from 'react'

const TodoList = ({todos}) => {
    console.log("TodoList call");
  return (
    <div>
        {
            todos.map(todo => <li key={todo?.id}>{todo.name}</li>)
        }
       
    </div>
  )
}

export default React.memo(TodoList)