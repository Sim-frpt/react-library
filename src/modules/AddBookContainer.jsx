import React from "react";
import ToggleFormButton from "./ToggleFormButton";
import BookForm from "./BookForm";

function AddBookContainer(props) {
  return (
    <section className="input-container">
      <ToggleFormButton onClick={props.onToggleButtonClick} />
      <BookForm shouldBeVisible={props.hideForm} books={props.books} />
    </section>
  );
}

export default AddBookContainer;
