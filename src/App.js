import React, { Component } from "react";
import Dogs from "./components/Dogs";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <Dogs />
      </main>
    );
  }
}

export default App;
