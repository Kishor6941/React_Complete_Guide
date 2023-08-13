import React, { useState } from 'react'

const CounterHook1 = () => {
    const [count, setCount] = useState(0)
    return (
      <>
        <div>
            <button onClick={() => setCount(prevCount => prevCount+1)}>
                IncrementCounter {count} time</button>
        </div>
      </>
    )
  
}

export default CounterHook1