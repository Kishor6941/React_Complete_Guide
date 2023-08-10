 import React, { Component } from 'react'

export class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count : 0
        }
    }

    increment() {
        this.setState({
            count : this.state.count+1,
        },() => {
            console.log(this.state.count)
        })
    }

    incrementFive() {
        this.setState(prev => ({
            count : prev.count + 5
        }))
    }

  render() {
    return (
        <div>
            <div>Count :: {this.state.count}</div>
            <div>
            <button onClick={() => this.increment()}> Increment </button>
            <button onClick={() => this.incrementFive()}> Increment By 5 </button>
            </div>
        </div>
    )
  }
}

export default Counter