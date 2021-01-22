import React, { useState, useContext, createContext } from "react";
import DataProcessor from "./DataProcessor";
import BreedSelector from "./BreedSelector";
import ScrollUp from "./ScrollUp/ScrollUp";

export default function Dogs(props) {
  const [breed, setBreed] = useState("All breeds");

  return (
    <React.Fragment>
      {/*  Breed Selector Dropdown */}
      <div style={{ paddingTop: 15 }}>
        <BreedSelector onChange={(value) => setBreed(value)} />
      </div>

      {/*  Heavy-lifting component: Fetches necessary data and displays it. Allows you to mark dogs as favorites as well. */}
      <div style={{ paddingTop: 50 }}>
        <DataProcessor breed={breed} />
      </div>
      {/*  Allows user to quickly scroll up when they want to access the navbar or breed selector */}
      <ScrollUp />
    </React.Fragment>
  );
}
