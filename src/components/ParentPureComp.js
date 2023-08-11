import React, { Component } from 'react'
// import PureComp from "./PureComp"
// import RegularComp from "./RegularComp"
import MemoComp from "./MemoComp"
export class ParentPureComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Kishor'
      }
    }
    componentDidMount() {
        setTimeout(() =>{
            this.setState({
                name : "Kishor"
            })
        },2000)
    }
  render() {
    console.log('**** Parent Pure COmponent')
    return (
      <React.Fragment>
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </React.Fragment>
    )
  }
}

export default ParentPureComp