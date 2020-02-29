import React from "react";
import ToggleFormButton from "./ToggleFormButton";
import BookForm from "./BookForm";

function AddBookContainer(props) {
  return (
    <section className="input-container">
      <ToggleFormButton handleFormToggle={props.handleFormToggle} />
      <BookForm
        isFormHidden={props.isFormHidden}
        books={props.books}
        handleFormToggle={props.handleFormToggle}
        handleAddBook={props.handleAddBook}
      />
    </section>
  );
}

export default AddBookContainer;
