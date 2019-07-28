import React from "react";
import { Link } from "react-router-dom";

//Styles
import logo from "../images/logo.svg";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
          <img className="Navbar__brand-logo " src={logo} alt="logo" />
          <span className="font-weight-ligth">Platzi</span>
          <span className="font-weight-bold">Conf</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
