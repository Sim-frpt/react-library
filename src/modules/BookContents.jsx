import React from "react";

function BookContents(props) {
  return (
    <>
      <h2 className="book__title">{props.book.title}</h2>
      <h3 className="book__author">{props.book.author}</h3>
      <p className="book__cover">{props.book.cover}</p>
      <p className="book__status">
        Reading Status: {props.book.isRead ? "Read" : "Unread"}
      </p>
    </>
  );
}

export default BookContents;
