import React, { Component } from "react";
import { books, CreateBook } from "./model/book";
import AddBookContainer from "./modules/AddBookContainer";
import MainContainer from "./modules/MainContainer";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      books,
      isFormHidden: true
    };

    this.handleAddBook = this.handleAddBook.bind(this);
    this.handleDeleteBook = this.handleDeleteBook.bind(this);
    this.handleFormToggle = this.handleFormToggle.bind(this);
    this.handleStatusToggle = this.handleStatusToggle.bind(this);
  }

  handleAddBook(bookValues) {
    CreateBook(bookValues);

    this.setState({
      books: books
    });
  }

  handleDeleteBook(id) {
    const books = this.state.books.filter(book => book.id !== id);
    this.setState({ books });
  }

  handleFormToggle() {
    this.setState(state => ({
      hideForm: !state.hideForm
    }));
  }

  handleStatusToggle(id) {
    this.setState(state => {
      state.books.forEach(book => {
        if (book.id === id) {
          book.toggleReadingStatus();
        }
      });
      return { books: state.books };
    });
  }

  render() {
    return (
      <>
        <AddBookContainer
          books={this.state.books}
          handleFormToggle={this.handleFormToggle}
          isFormHidden={this.state.isFormHidden}
          handleAddBook={this.handleAddBook}
        />
        <MainContainer
          books={this.state.books}
          handleDeleteBook={this.handleDeleteBook}
          handleStatusToggle={this.handleStatusToggle}
        />
      </>
    );
  }
}

export default App;
