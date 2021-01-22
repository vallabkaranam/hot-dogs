import React from "react";
import Heading from "./Heading";
import signup from "../images/signup.png";

const SignUp = () => {
  return (
    <div>
      <Heading name="Sign Up" />;
      <img className="center" src={signup} alt="signup" />
    </div>
  );
};

export default SignUp;
