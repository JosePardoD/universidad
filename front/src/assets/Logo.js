import React from "react";
import "./Logo.css";
import logo from "./logo.png";

function Logo(props) {
  const { showText = true } = props;

  const style = {
    width: "179px",
    height: "169px",
  };

  return (
    <div className="flex logo">
      <img src={logo} style={style}></img>
      {showText ? <h1>PetHome</h1> : null}
    </div>
  );
}

export default Logo;
