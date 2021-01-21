import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Dogs from "./components/Dogs";
import Favorites from "./components/Favorites";
import NotFound from "./components/notFound";
import NavBar from "./components/NavBar";
import "./App.css";
import { UserContext } from "./components/User";
import { createContext } from "react";

const App = () => {
  const [favPics, setFavPics] = useState([]);

  return (
    <UserContext.Provider value={{ favPics, setFavPics }}>
      {console.log("Data has started from App component!", favPics)}
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/dogs" component={Dogs}></Route>
          <Route path="/favorites" component={Favorites}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="dogs" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </UserContext.Provider>
  );
};

export default App;
