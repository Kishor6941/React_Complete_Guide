import React, { useState, useMemo } from "react";
import UserCard from "./UserCard";
const User = () => {
  const userList = [
    { id: 1, name: "Kishor" },
    { id: 2, name: "Govind" },
    { id: 3, name: "Sunil" },
  ];

  const [users, setusers] = useState(userList);
  const [counter, setCounter] = useState(0);

  const userDisaply = useMemo(()=> users.map((user) => {
    console.log("Caaling");
    return <h2 key={user?.id}>
        < UserCard data={user} />
        </h2>
}),[users]);

  const handleCounter = () => {
    setCounter(counter => counter + 1)
  }

  const addUser = () => {
    setusers([
        ...users,
        {
            id : users.length+1,
            name : "Harsh"
        }
    ])
  }
  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={() => handleCounter()}>Increment</button>
      <button onClick={() => addUser()}>Change User</button>
      {userDisaply}
    </div>
  );
};

export default User;
