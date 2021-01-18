import React, { useState } from "react";
import InfiniteList from "./InfiniteList";
import Heading from "./Heading";
import BreedDisplay from "./BreedDisplay";
import BreedSelector from "./BreedSelector";

export default function Dogs() {
  const [breed, setBreed] = useState("All breeds");

  return (
    <div style={{ backgroundColor: "rgb(33, 182, 168)" }}>
      <Heading />
      <BreedSelector onChange={(value) => setBreed(value)} />

      <BreedDisplay breed={breed} />
      {console.log("state is changed to", breed)}
    </div>
  );
}
