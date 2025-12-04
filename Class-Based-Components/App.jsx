import React, { Component } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

class App extends Component {
  constructor(props) {
    console.log("Constructor");

    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("Mount");
    this.timer = setInterval(() => {
      console.log("Hello World");
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello World {this.state.count}</h1>
        <button
          onClick={() =>
            this.setState((prevState) => ({ count: prevState.count + 1 }))
          }
        >
          Count update{" "}
        </button>
      </div>
    );
  }
}

export default App;
