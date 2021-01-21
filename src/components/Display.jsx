import React, { useState, useEffect, useContext, createContext } from "react";
import { UserContext } from "./User";
import "../App.css";

const Display = ({ pics, setPics, favPics, setFavPics }) => {
  const favPicsContext = useContext(UserContext);
  {
    console.log("Data has made it down to Display Component!", favPicsContext);
  }

  if (pics.length === 0) {
    return (
      <div>
        <img
          src="https://media.giphy.com/media/3o6gaRoRoR01FU29KE/giphy.gif"
          alt="FETCHING your data"
          className="center"
        />
        <p
          className="center"
          style={{ color: "grey", height: 50, width: 50 }}
        ></p>
      </div>
    );
  }
  return (
    /* <UserContext.Consumer>
      {({ favPics, setFavPics }) => setFavPics([...favPics, "Hi"])}
    </UserContext.Consumer> */
    <div>
      <ul id="list">
        {pics.map((img, i) => (
          <li
            style={{
              backgroundImage: `url(${img})`,
              border: "solid #4ce6cc",
              cursor: "pointer",
            }}
            key={i}
            onClick={() => {
              favPics = [...favPics, img];
              console.log("Added to your favorites!");
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Display;
