import React, { Component } from 'react'
import ChildComponent from '../components/ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'parent'
      }
    }

    greetParent = (name) => {
        alert(`hello ${this.state.parentName} ${name}`)
    }

  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent