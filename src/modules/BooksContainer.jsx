import React from "react";
import BookContents from "./BookContents";
import BookControls from "./BookControls";

function BooksContainer(props) {
  const cards = props.books.map(book => {
    return (
      <div key={book.id} className="book__card">
        <BookContents book={book} />
        <BookControls
          id={book.id}
          handleDeleteBook={props.handleDeleteBook}
          handleStatusToggle={props.handleStatusToggle}
        />
      </div>
    );
  });

  return cards;
}

export default BooksContainer;
