import React, { Component, } from "react";
import Child from "./Child";

class About extends Component {
    constructor(){
        super();
        console.log("Parent-Constructor");
    }

    componentDidMount(){    
        
        console.log("Parent-Component Did Mount");
    };

    componentWillUnmount(){

        console.log("Parent-Component Will Unmount");
    }

    render(){
        console.log("Parent-Render");
        return(
            <div>
                <h1>Parent About Page</h1>
                <Child />
            </div>  
        )
    }
}

export default About;