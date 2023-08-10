import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
  render() {

return (
// Short circuit

this.state.isLoggedIn && <div>Welcome Kishor</div>


  /// Ternary operator
  // this.state.isLoggedIn ? <div>Welcome Kishor</div> : <div>Welcome Guest</div>
)
/* *** using variable

    // let message;
    // if(this.state.isLoggedIn) {
    //   message =  <div>Welcome Kishor</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }

    */


    // return (<>{message}</>)
    // if(this.state.isLoggedIn) {
    //   return <div>Welcome Kishor</div>
    // } else {
    //   return <div>Welcome Guest</div>
    // }

  }
}

export default UserGreeting