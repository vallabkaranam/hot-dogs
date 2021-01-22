import React, { useContext } from "react";
import { UserContext } from "./User";
import run from "../images/run.webp";

const Display = ({ pics, setPics, favPics, setFavPics }) => {
  const favPicsContext = useContext(UserContext);
  console.log("Data has made it down to Display Component!", favPicsContext);

  if (pics.length === 0) {
    return (
      <div>
        <img src={run} alt="FETCHING your data" className="center" />
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
              setFavPics([...favPics, img]);

              /* This should be a callback function to set the state of 
              favPics array which is coming down from App through Context. */

              console.log("Added to your favorites!");
              window.confirm(
                "Are you sure that you want to mark this as a Hot Dog?"
              );
              /* given more time, this would be replaced with a toaster component that 
              notifies that you have added to your favorites list; */
            }}
          />
        ))}
      </ul>
      {console.log(
        "Your local favorites list (not global favPics yet):",
        favPics
      )}
    </div>
  );
};

export default Display;
