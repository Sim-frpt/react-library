import React from "react";

function Button(props) {
  return (
    <button className={props.classVariant} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
