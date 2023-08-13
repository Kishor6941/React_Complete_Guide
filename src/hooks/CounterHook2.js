import React, { useState } from 'react'

function CounterHook2() {
  const [count, setCount] = useState(0);
    return (
    <>
    {count}
        <button onClick={()=> setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={()=> setCount(prevCount => prevCount + 5)}>Increment By 5</button>
        <button onClick={()=> setCount(prevCount => prevCount - 1)}>Decrement</button>
        <button onClick={()=> setCount(0)}>Reset</button>
    </>
  )
}

export default CounterHook2