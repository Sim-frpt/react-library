import React from "react";
import ToggleFormButton from "./ToggleFormButton";
import BookForm from "./BookForm";

function AddBookContainer(props) {
  return (
    <section className="input-container">
      <ToggleFormButton onToggleButtonClick={props.onFormToggle} />
      <BookForm
        shouldBeVisible={props.hideForm}
        books={props.books}
        onCancelFormSubmit={props.onFormToggle}
      />
    </section>
  );
}

export default AddBookContainer;
