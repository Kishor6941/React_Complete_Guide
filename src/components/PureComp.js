import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("Pure Child Component");
    return (
      <div>PureComponent</div>
    )
  }
}

export default PureComp