import React from "react";

function Input(props) {
  const { children, type, placeholder, onChange, value} = props;

  return (
    <label className="input">
      <b>{children}</b>
      <input type={type} placeholder={placeholder} onChange={onChange} value={value}></input>
    </label>
  );
}
export default Input;
