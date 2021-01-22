import React from "react";

const Heading = (props) => {
  return (
    <div style={{ textAlign: "center", fontFamily: "roboto" }}>
      <h1>Welcome to Hot Dogs!</h1>
      <h3>{props.name} is currently under construction.</h3>
    </div>
  );
};

export default Heading;
