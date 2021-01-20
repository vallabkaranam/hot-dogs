import React, { useState } from "react";
//import Heading from "./Heading";
import BreedDisplay from "./BreedDisplay";
import BreedSelector from "./BreedSelector";
import logo from "../logo.png";
import Scroll from "./scroll";

export default function Dogs() {
  const [breed, setBreed] = useState("All breeds");

  console.log(window.pageYOffset);

  return (
    <React.Fragment>
      <div style={{ paddingTop: 15 }}>
        <BreedSelector onChange={(value) => setBreed(value)} />
      </div>

      {/*  Display */}
      <div style={{ paddingTop: 50 }}>
        <BreedDisplay breed={breed} />
      </div>
      <Scroll />
    </React.Fragment>
  );
}
