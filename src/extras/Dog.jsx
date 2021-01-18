import React, { useState } from "react";
import InfiniteList from "./components/InfiniteList";
import Heading from "./components/Heading";
import ListGroup from "./components/listGroup";

export default function App() {
  const [state, setState] = useState([]);

  return (
    <div>
      <Heading />
      <div className="row">
        <div class="col-2">Hi!!</div>
        <div class="col">
          <InfiniteList state={state} setState={setState} />
        </div>
      </div>
    </div>
  );
}
