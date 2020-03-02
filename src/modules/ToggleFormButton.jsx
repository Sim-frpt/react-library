import React from "react";
import Button from "./Button";

function ToggleFormButton(props) {
  let buttonClass = "button button--primary button__form-toggle";
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
