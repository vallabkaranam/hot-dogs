import React, { useState, useEffect, useContext, createContext } from "react";
import { UserContext } from "./User";
import Heading from "./Heading";
import logo from "../logo.png";

const Favorites = (props) => {
  const favPicsContext = useContext(UserContext);
  console.log("Data has made it down to Favorite Component!", favPicsContext);

  return (
    <React.Fragment>
      <Heading />

      <img className="center" src={logo} alt="logo" />
    </React.Fragment>
  );
};

export default Favorites;
