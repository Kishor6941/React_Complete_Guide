import React from "react";
import Person from "../components/Person"

function PersonList() {
  const personList = [
      { id: 2, name: "Sunil",age:30 },
    { id: 1, name: "Kishor",age:27 },
    { id: 3, name: "Piyush", age:20 },
    { id: 4, name: "Harsh",age:17 },
  ];
  const printName = personList.map((user) => (
    <Person key={user.id} user = {user}/>
  ));
  return <div>{printName}</div>;
}

export default PersonList;
