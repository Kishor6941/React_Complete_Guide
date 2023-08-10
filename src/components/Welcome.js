import React, { Component } from "react";

class Welcome extends Component {
render() {
    let {name} = this.props
    let {children} = this.props
    
    return (
        <h1>Hello from {name} Component {children}</h1>
    )
}
}

export default Welcome;