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
    this.handleRevealForm = this.handleRevealForm.bind(this);
  }

  handleRevealForm() {
    this.setState(state => ({
      hideForm: !state.hideForm
    }));
  }

  handleAddBook() {}

  render() {
    return (
      <AddBookContainer
        books={this.state.books}
        onToggleButtonClick={this.handleRevealForm}
        hideForm={this.state.hideForm}
      />
    );
  }
}

export default App;
