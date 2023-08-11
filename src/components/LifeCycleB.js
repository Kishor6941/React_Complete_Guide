import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       name : 'Kishor'  
      }
      console.log("LifecycleB constructor called");
    }

    static getDerivedStateFromProps(props,state) {
        console.log("LifecycleB getDerivedStateFromProps called");
        // return {
        //     name : props.name
        // }
    }


    componentDidMount() {
        console.log("LifecycleB componentDidMount called");
        // setTimeout(() => {
        //   this.setState({name: "Kishor Shripati Fawade"})
        // }, 2000)
      }

      shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate called');
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LifecycleB getSnapshotBeforeUpdate called');
        return null

    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate called');
        
    }

  render() {
    console.log("LifecycleB render called");
    return (
      <div>{this.state.name}B</div>
    )
  }
}

export default LifecycleB