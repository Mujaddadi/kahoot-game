import React from "react";

import Logo from "../../../assets/images/brand/logo.png";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="d-flex headerWrapper">
        <img src={Logo} alt="kahoot logo" className="logo" />
        <h1 className="flex-grow-1 heading">Collect Points</h1>
      </div>
    </header>
  );
};

export default Header;
