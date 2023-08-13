import React from 'react'
import { UserContext, channelContext } from '../../App'

function ComponentC() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return(
                        <channelContext.Consumer>
                            {
                                channel => {

                                    return <div>User Context value {user} and channel is {channel}</div>
                                }
                            }
                        </channelContext.Consumer>
                    ) 
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentC