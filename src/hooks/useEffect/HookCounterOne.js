import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('useEffect');
    document.title = `you clicked ${count} times`;
    return () => {
        console.log("Component unmounting");
    }
  },[count] );
  return (
    <>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        click {count} times
      </button>
    </>
  );
}

export default HookCounterOne;
