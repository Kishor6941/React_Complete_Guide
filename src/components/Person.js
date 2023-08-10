import React from 'react'

function Person({user}) {
  return (
    <h1 key={user.id}>
      <span>I am</span> {user.name}. I am {user.age} years old
    </h1>
  )
}

export default Person