import React from "react";
import Button from "./Button";

function ToggleFormButton(props) {
  let buttonClass = "form-toggle__button";
  buttonClass += props.isFormHidden ? "" : " button--hidden";

  return (
    <Button
      classVariant={buttonClass}
      text="Add Book"
      onClick={props.handleFormToggle}
    />
  );
}

export default ToggleFormButton;
