import React, { Component, } from "react";

class Child extends Component {
    constructor(){
        super();
        console.log("Child-Constructor");
    }

    componentDidMount(){
        
        console.log("Child-Component Did Mount");
    };

    componentWillUnmount(){

        console.log("Child-Component Will Unmount");
    }

    render(){
        console.log("Child-Render");
        return(
            <h1>Child Page</h1>

        )
    }
}

export default Child;