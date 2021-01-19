import React, { useState } from "react";
//import Heading from "./Heading";
import BreedDisplay from "./BreedDisplay";
import BreedSelector from "./BreedSelector";

export default function Dogs() {
  const [breed, setBreed] = useState("All breeds");

  return (
    <div>
      <div
        style={{
          //width: "100%",
          //backgroundColor: "pink",
          //position: "fixed",
          paddingBottom: 250,
        }}
      >
        {
          //<Heading />
        }

        <BreedSelector onChange={(value) => setBreed(value)} />
      </div>
      <div>
        <BreedDisplay breed={breed} />
      </div>
    </div>
  );
}
