import React from "react";
import loginImg from "../../assets/Images/login1.png";
import Tab from "./Components/Tab";

const Login = () => {
  return (
    <div className="flex items-center justify-center relative py-16">
      <img src={loginImg} alt="" className="absolute left-0 bottom-0" />
      <Tab />
    </div>
  );
};

export default Login;
