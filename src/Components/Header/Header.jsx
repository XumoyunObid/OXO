import React from "react";
import LogoIcon from "../../assets/Icons/LogoIcon";
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Header = () => {
  return (
    <div className="shadow-md">
      <div className="container py-5 flex items-center justify-between">
        <Link to="/">
          <LogoIcon />
        </Link>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
