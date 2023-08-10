import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("Click Handler");
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick