import React from "react";
import Button from "./Button";

function ToggleFormButton(props) {
  return (
    <Button
      classVariant="input-container__toggle"
      text="Add Book"
      onClick={props.onToggleButtonClick}
    />
  );
}

export default ToggleFormButton;
