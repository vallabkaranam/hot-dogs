import React, { useState } from "react";
import InfiniteList from "./InfiniteList";
import Heading from "./Heading";
import BreedDisplay from "./BreedDisplay";
import BreedSelector from "./BreedSelector";

export default function Dogs() {
  const [pics, setPics] = useState([]);
  const x = 15;
  const [breed, setBreed] = useState("corgi");

  if (x > 0) {
    return (
      <div>
        <h1>{breed}</h1>
        <Heading />
        <BreedSelector onChange={(value) => setBreed(value)} />
        <BreedDisplay pics={pics} setPics={setPics} breed={breed} />
        {console.log("state is changed to", breed)}
      </div>
    );
  } else {
    return (
      <div>
        <Heading />
        <BreedSelector />
        <InfiniteList state={pics} setState={setPics} />
      </div>
    );
  }
}
