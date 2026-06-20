import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

class App extends Component {
  constructor(props) { 
  // When a Class is Called Constructor method first called and it is the best place for initialiation or for creating state
    console.log("Constructor");

    super(props); // this super method invoke the parent class constructor

    this.state = {// In class based Component all the state created in one state Object.
      count: 0,
      count2: 0,
    };
  }
  componentDidMount() {// This function called after the render, in here we do api calls.
    console.log("Mount");
    // this.timer = setInterval(() => {
    //   console.log("Hello World");
    //   // this.setState((prevState) => ({count: prevState.count + 1}));
    // }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render() {
    const { count } = this.state;
    console.log("render");
    return (
      <div>
        <h1>Hello World {count}</h1>
        <button
          onClick={() =>
            // this.setState((prevState) => ({ count: prevState.count + 1 }))
            this.setState(() => ({ count: count + 1 }))
          }
        >
          Count update{" "}
        </button>
      </div>
    );
  }
}

export default App;
