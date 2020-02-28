import React, { Component } from "react";
import { books } from "./model/book";
import AddBookContainer from "./modules/AddBookContainer";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      books,
      hideForm: true
    };

    this.handleAddBook = this.handleAddBook.bind(this);
    this.handleFormToggle = this.handleFormToggle.bind(this);
  }

  handleAddBook() {}

  handleFormToggle() {
    this.setState(state => ({
      hideForm: !state.hideForm
    }));
  }

  render() {
    return (
      <AddBookContainer
        books={this.state.books}
        onFormToggle={this.handleFormToggle}
        hideForm={this.state.hideForm}
      />
    );
  }
}

export default App;
