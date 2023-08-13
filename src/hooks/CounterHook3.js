import React, { useState } from "react";

function CounterHook3() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  //   const setUserData = (e) => {
  //     setUser({
  //       firstName: e.target.value,
  //       lastName: e.target.value,
  //     });
  //   };
  return (
    <>
      <div>
        <input
          type="text"
          value={user?.firstName}
          onChange={(e) =>
            setUser({
              ...user,
              firstName: e.target.value,
            })
          }
        />
      </div>

      <div>
        <input
          type="text"
          value={user?.lastName}
          onChange={(e) =>
            setUser({
              ...user,
              lastName: e.target.value,
            })
          }
        />
      </div>

      <div>
        <h1>First Name is {user?.firstName}</h1>
        <h1>last Name is {user?.lastName}</h1>
        <h2>{JSON.stringify(user)}</h2>
      </div>
    </>
  );
}

export default CounterHook3;
