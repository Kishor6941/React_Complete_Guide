import React, { Component } from 'react'
import LifecycleB from "./LifeCycleB"
export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       name : 'Kishor'  
      }
      console.log("LifecycleA constructor called");
    }

    static getDerivedStateFromProps(props,state) {
        console.log("LifecycleA getDerivedStateFromProps called");
        // return {
        //     name : props.name
        // }
    }

    
    componentDidMount() {
        console.log("LifecycleA componentDidMount called");
        // setTimeout(() => {
            //   this.setState({name: "Kishor Shripati Fawade"})
            // }, 2000)
        }
        
        shouldComponentUpdate() {
            console.log('LifecycleA shouldComponentUpdate called');
            return true
        }

        getSnapshotBeforeUpdate() {
            console.log('LifecycleA getSnapshotBeforeUpdate called');
            return null

        }

        componentDidUpdate() {
            console.log('LifecycleA componentDidUpdate called');
            
        }

        changeState = () => {
            this.setState({
                name : 'Sunil'
            })
        }
  render() {
    console.log("LifecycleA render called");
    return (
      <div>
       <LifecycleB />
        {this.state.name}
        
        <button onClick={this.changeState}>Change state</button>
        </div>
    )
  }
}

export default LifecycleA