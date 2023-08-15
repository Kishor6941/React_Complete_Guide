import React from 'react'

const UserCard = ({data}) => {
    console.log("userCard");
  return (
    <div>
        <li>{data?.name}</li>
    </div>
  )
}

export default UserCard