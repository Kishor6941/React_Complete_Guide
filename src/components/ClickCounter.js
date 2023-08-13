import React, { Component } from 'react'
import withCounter from "./WithCounter"
export class ClickCounter extends Component {
   
  render() {
    const {count,incrementCount,name} = this.props
    return (
      <div>
        <h1>{name}</h1>
        <button onClick={incrementCount}> Clicked {count} times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter,5)