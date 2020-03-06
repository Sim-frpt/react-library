import React from "react";
import Button from "./Button";

function BookControls(props) {
  return (
    <div className="book__card__controls">
      <Button
        classVariant="button button--primary book__status-button"
        onClick={props.handleStatusToggle.bind(this, props.id)}
        text="Change Status"
      />
      <Button
        classVariant="button button--secondary book__delete-button"
        onClick={props.handleDeleteBook.bind(this, props.id)}
        text="Delete"
      />
    </div>
  );
}

export default BookControls;
