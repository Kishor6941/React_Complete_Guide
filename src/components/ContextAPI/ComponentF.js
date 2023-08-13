import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentF extends Component {
  render() {
    return (    
        <UserConsumer>
            {
                (userName) => {
                    return <h1>Hello {userName}</h1>
                }
            }
        </UserConsumer>
    )
  }
}

export default ComponentF