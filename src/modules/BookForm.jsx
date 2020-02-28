import React, { Component } from "react";

export class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      images: ""
    };

    this.fileInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCancelSubmit(event) {
    this.props.onCancelFormSubmit();
  }

  handleFiles(event) {
    const file = event.target.files[0];
    // TODO I stopped here
    console.log(file);
  }

  render() {
    return (
      <form className="book-form" onSubmit={this.handleSubmit}>
        <div className="book-form__element">
          <label className="book-form__label">
            Title:
            <input
              className="book-form__input"
              type="text"
              value={this.state.title}
              name="title"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="book-form__element">
          <label>
            Author:
            <input
              className="book-form__input"
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="book-form__element">
          <label className="book-form__label">
            Pages:
            <input
              className="book-form__input"
              type="text"
              name="pages"
              value={this.state.pages}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="book-form__element">
          <label className="book-form__label">
            Image:
            <input
              className="book-form__input"
              type="file"
              ref={this.fileInput}
              name="file"
              onChange={this.handleFiles}
            />
          </label>
        </div>
        <div className="book-form__control">
          <button type="submit" value>
            Add
          </button>
          <button type="button" value onClick={this.handleCancelSubmit}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default BookForm;
