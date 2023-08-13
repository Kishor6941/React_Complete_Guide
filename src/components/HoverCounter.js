import React, { Component } from 'react'
import withCounter from "./WithCounter"
export class HoverCounter extends Component {
   

  render() {
    const {count,incrementCount,name} = this.props
    return (
      <div>
        <h1>{name}</h1>
        <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter,10)