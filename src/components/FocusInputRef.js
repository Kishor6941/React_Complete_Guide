import React, { Component, createRef } from 'react'
import InputRef from './InputRef'

export class FocusInputRef extends Component {
    constructor(props) {
      super(props)
    this.componentRef = createRef()
    }
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <InputRef ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInputRef