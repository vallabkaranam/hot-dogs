import React, { useState, useContext, createContext } from "react";
//import Heading from "./Heading";
import DataProcessor from "./DataProcessor";
import BreedSelector from "./BreedSelector";
import logo from "../logo.png";
import ScrollUp from "./ScrollUp";
import { UserContext } from "./User";

//import { createContext } from "react";

export default function Dogs(props) {
  //const favPics = useContext(UserContext);
  const [breed, setBreed] = useState("All breeds");

  return (
    <React.Fragment>
      <div style={{ paddingTop: 15 }}>
        <BreedSelector onChange={(value) => setBreed(value)} />
      </div>

      {/*  Display */}
      <div style={{ paddingTop: 50 }}>
        <DataProcessor breed={breed} />
      </div>
      <ScrollUp />
    </React.Fragment>
  );
}
