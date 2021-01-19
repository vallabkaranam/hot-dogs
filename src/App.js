import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Dogs from "./components/Dogs";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/dogs" component={Dogs}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="dogs" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
