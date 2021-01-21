import React, { useState, useEffect, useContext, createContext } from "react";
import { UserContext } from "./User";
import Heading from "./Heading";

const Favorites = (props) => {
  const favPicsContext = useContext(UserContext);
  console.log("Data has made it down to Favorite Component!", favPicsContext);

  return (
    <React.Fragment>
      <Heading />
    </React.Fragment>
  );
};

export default Favorites;
