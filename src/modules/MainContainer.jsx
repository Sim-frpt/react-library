import EmptyContainer from "./EmptyContainer";
import BooksContainer from "./BooksContainer";
import React from "react";

function MainContainer(props) {
  const areBooksAvailable = props.books.length ? true : false;
  let childContainer;

  if (!areBooksAvailable) {
    childContainer = <EmptyContainer />;
  } else {
    childContainer = (
      <BooksContainer
        books={props.books}
        handleDeleteBook={props.handleDeleteBook}
        handleStatusToggle={props.handleStatusToggle}
      />
    );
  }

  return <section className="main-section">{childContainer}</section>;
}

export default MainContainer;
