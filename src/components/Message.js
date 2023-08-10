import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message : "Welcome Visitor"
        }
    }
    changeSub() {
        this.setState({
            message : "Thank you for subscribing"
        })
    }
    render() {
        return (
            <div>
                <h1> {this.state.message}</h1>
                <div>
                    <button onClick={() => this.changeSub()}>SubScribe</button>
                </div>
            </div>
        )
    }
}

export default Message