import React, {useContext} from 'react'
import ComponentC from './ComponentC'
import { UserContext, channelContext } from '../../App'
function ComponentB() {
   const user =  useContext(UserContext)
    const channel = useContext(channelContext)
  return (
    <div>
       {user} - {channel}
    </div>
  )
}

export default ComponentB