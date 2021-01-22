import React from "react";
import sad from "../images/sad dog.gif";
const NotFound = () => {
  return (
    <div className="center fonts">
      <h1>You must be a lost puppy! </h1>
      <img src={sad} alt="Sad dog" />
    </div>
  );
};

export default NotFound;
