import React from "react";

const Hello = (props) => {
    let {name, surName} = props;
    return (
        <div className = "dummyClass">
            <h1>Hello from {name} {surName} and I am from {props.children}</h1>
        </div>
    )

//    return React.createElement(
//     'div',
//     {id : 'hello',className:"dummyClass"},
//     React.createElement('h1',null,'Hello Kishor'))
}

export default Hello;