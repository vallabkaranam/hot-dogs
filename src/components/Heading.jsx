import React from "react";

const Heading = () => {
  return (
    <div style={{ textAlign: "center", fontFamily: "roboto" }}>
      <h1>Welcome to Hot Dogs!</h1>
      <h3>Favorites is currently under construction.</h3>
      <h5>
        This is where you will be able to see all the{" "}
        <span style={{ color: "Red", fontWeight: "bold" }}>Hot Dogs</span> that
        you have saved.
      </h5>
    </div>
  );
};

export default Heading;
