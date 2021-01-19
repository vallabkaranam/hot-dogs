import React, { useState } from "react";
import Heading from "./Heading";
import BreedDisplay from "./BreedDisplay";
import BreedSelector from "./BreedSelector";

export default function Dogs() {
  const [breed, setBreed] = useState("All breeds");

  return (
    <div style={{ backgroundColor: "rgb(162, 235, 218)", height: "100vh" }}>
      <Heading />
      <BreedSelector onChange={(value) => setBreed(value)} />
      <BreedDisplay breed={breed} />
      {
        //console.log("state is changed to", breed)
      }
    </div>
  );
}
