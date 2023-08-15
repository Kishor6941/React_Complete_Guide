import React, {useReducer} from 'react'
import TodoList from './TodoList';
export const TODOS_ACTION =  Object.freeze({
  ADD_TASK : 'ADD_TASK',
  DELETE_TASK : 'DELETE_TASK',
  RESET_TODOS : 'RESET_TODOS'
})

const initialState = [];
const reducer = (state,action) => {
  switch(action.type) {
    case TODOS_ACTION.ADD_TASK :
      return [
        ...state,
        {
          id : state.length+1,
          name : action.payload
        }
      ]
    
      case TODOS_ACTION.DELETE_TASK :
       return state.filter((todo) => todo?.id !== action?.payload)

       case TODOS_ACTION.RESET_TODOS :
        return init(action.payload)
    default : return state;
  }
}

function init (initialState) {
  // const result = [...initialState, {id :1, name : 'reading'}]
  // return result
  return initialState
}
function CounterOneR() {
  const [todos, dispatch] = useReducer(reducer, initialState, init)
  return (
    <>
      <h1>Todo List {todos.length}</h1>
      Add New Task :

      <input type="text" onBlur={(e) => dispatch({type: TODOS_ACTION.ADD_TASK, payload  : e.target.value})} />
      <button onClick={() => dispatch({type : TODOS_ACTION.RESET_TODOS, payload : initialState})}>Reset</button>
<hr/>
      <TodoList todos = {todos} dispatch={dispatch} />
    </>
  )
}

export default CounterOneR