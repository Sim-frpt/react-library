import React from "react";

function BookContents(props) {
  return (
    <>
      <h2 className="book__card__title">{props.book.title}</h2>
      <h3 className="book__card__author">{props.book.author}</h3>
      <img
        src={props.book.cover}
        alt="Book Cover"
        className="book__card__cover"
      />
      <p className="book__card__pages">{props.book.pages} pages</p>
      <p className="book__card__status">
        Reading Status: {props.book.isRead ? "Read" : "Unread"}
      </p>
    </>
  );
}

export default BookContents;
