import React from 'react'
import {TODOS_ACTION} from './CounterOneR'
const TodoList = ({todos, dispatch}) => {
  return (
    <>
        {
        todos.map((ele) => <li key={ele?.id}>
          {ele?.name}
          <span>
            <button onClick={() => dispatch({type : TODOS_ACTION.DELETE_TASK, payload : ele?.id})}>delete</button>
          </span>
          </li>)
      }
    </>
  )
}

export default TodoList