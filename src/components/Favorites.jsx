import React, { useContext } from "react";
import { UserContext } from "./User";
import Heading from "./Heading";
import logo from "../images/logo.png";
import { render } from "@testing-library/react";
import App from "../App";

const Favorites = (props) => {
  const favPicsContext = useContext(UserContext);
  console.log("Data has made it down to Favorite Component!", favPicsContext);
  /* The work remained to do here is to use the same display component as the Dogs page
and instead give it favPics data so that only those pictures stored in App.js will 
  render. */

  return (
    <React.Fragment>
      <Heading name="Favorites" />
      <img className="center" src={logo} alt="logo" />
      <h5 className="fonts center">
        You will be able to see all the{" "}
        <span style={{ color: "Red", fontWeight: "bold" }}>Hot Dogs</span> that
        you have saved here.
      </h5>
    </React.Fragment>
  );
};

export default Favorites;
