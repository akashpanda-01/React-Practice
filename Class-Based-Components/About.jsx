import React, { Component } from "react";

class About extends Component {
    constructor(){
        super();
        console.log("Constructor");
    }

    componentDidMount(){
        
        console.log("Component Did Mount");
    };

    componentWillUnmount(){

        console.log("Component Will Unmount");
    }

    render(){
        console.log("Render");
        return(
            <h1>About Page</h1>
        )
    }
}

export default About;