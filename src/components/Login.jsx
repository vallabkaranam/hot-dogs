import React from "react";
import Heading from "./Heading";
import login from "../images/login.jpg";

const Login = () => {
  return (
    <div>
      <Heading name="Login" />
      <img className="center" src={login} alt="login" />
    </div>
  );
};

export default Login;
