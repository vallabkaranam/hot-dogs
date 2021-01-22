import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Dogs from "./components/Dogs";
import Favorites from "./components/Favorites";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NotFound from "./components/notFound";
import { UserContext } from "./components/User";
import "./App.css";

const App = () => {
  /* favPics will be stored here because it is the common ancestor of the 
  Display component (who needs to mutate this data) and Favorites component 
  (who needs to read this data). */

  const [favPics, setFavPics] = useState([]);

  return (
    <UserContext.Provider value={{ favPics, setFavPics }}>
      {console.log("Data has started from App component!", favPics)}
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/dogs" component={Dogs}></Route>
          <Route path="/favorites" component={Favorites}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="dogs" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </UserContext.Provider>
  );
};

export default App;
