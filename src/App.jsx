import React, { Component } from "react";
import { CreateBook } from "./model/book";
import defaultBooks from "./model/defaultBooks";
import AddBookContainer from "./modules/AddBookContainer";
import MainContainer from "./modules/MainContainer";
import "./assets/styles/App.scss";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      isFormHidden: true
    };

    this.handleAddBook = this.handleAddBook.bind(this);
    this.handleDeleteBook = this.handleDeleteBook.bind(this);
    this.handleFormToggle = this.handleFormToggle.bind(this);
    this.handleStatusToggle = this.handleStatusToggle.bind(this);
  }

  componentDidMount() {
    const localStorageContent = localStorage.getItem("books") || [];
    let books;

    if (localStorageContent.length > 0) {
      books = JSON.parse(localStorageContent).map((book, index) => {
        book.id = index + 1;
        return CreateBook(book);
      });
    } else {
      books = defaultBooks.map((book, index) => {
        book.id = index + 1;
        return CreateBook(book);
      });
    }
    this.setState({ books });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.books !== prevState.books) {
      this.updateLocalStorage();
    }
  }

  handleAddBook(bookValues) {
    bookValues.id = this.state.books.length ? this.state.books.length + 1 : 1;

    const newBook = CreateBook(bookValues);

    this.setState(state => {
      const books = [...state.books, newBook];

      return {
        books
      };
    });
  }

  handleDeleteBook(id) {
    this.setState(state => {
      const books = state.books.filter(book => book.id !== id);

      return { books };
    });
  }

  handleFormToggle() {
    this.setState(state => ({
      isFormHidden: !state.isFormHidden
    }));
  }

  handleStatusToggle(id) {
    this.setState(state => {
      const books = state.books.map(book => {
        if (book.id === id) {
          book.toggleReadingStatus();
        }

        return book;
      });

      return { books };
    });
  }

  updateLocalStorage() {
    const books = JSON.stringify(this.state.books);
    localStorage.setItem("books", books);
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
