import React, { Component } from "react";
import getBase64Img from "../helpers/base64Converter";

export class BookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      pages: "",
      cover: ""
    };

    this.fileInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCancelSubmit(event) {
    this.props.handleFormToggle();
  }

  async handleFileInput(event) {
    const input = event.target;
    const file = input.files[0];

    if (!file) {
      return;
    }
    // input.setCustomValidity("");

    if (!this.isFileSizeAppropriate(input, file)) {
      return;
    }

    const convertedFile = await getBase64Img(file).catch(e => Error(e));

    if (convertedFile instanceof Error) {
      console.error(convertedFile.message);
      return;
    }

    this.setState({ cover: convertedFile });
  }

  handleSubmit(event) {
    const form = event.target;
    event.preventDefault();

    const bookValues = {
      title: this.state.title,
      author: this.state.author,
      pages: this.state.pages,
      cover: this.state.cover
    };

    // Remove the keys that are empty so that the bookFactory can provide placeholders
    Object.keys(bookValues).forEach(key => {
      if (bookValues[key] === "" || bookValues[key] === null) {
        delete bookValues[key];
      }
    });

    this.setState({
      title: "",
      author: "",
      pages: "",
      cover: ""
    });

    this.props.handleFormToggle();
    this.props.handleAddBook(bookValues);
    form.reset();
  }

  isFileSizeAppropriate(input, file) {
    const filesize = (file.size / 1024).toFixed(4);
    const maxSize = 1000;

    if (filesize > maxSize) {
      input.setCustomValidity(
        `Please make sure your file is less than ${maxSize}`
      );
      return false;
    } else {
      input.setCustomValidity("");
      return true;
    }
  }

  render() {
    let formClass = "book-form";

    if (this.props.isFormHidden) {
      formClass += " book-form--hidden";
    }

    return (
      <form className={formClass} onSubmit={this.handleSubmit}>
        <div className="book-form__element">
          <label className="book-form__label">
            Title <span className="book__required">(required)</span>:
            <input
              className="book-form__input"
              type="text"
              value={this.state.title}
              name="title"
              onChange={this.handleChange}
              minLength="2"
              maxLength="50"
              required
            />
          </label>
        </div>
        <div className="book-form__element">
          <label>
            Author <span className="book__required">(required)</span>:
            <input
              className="book-form__input"
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
              required
              minLength="2"
              maxLength="100"
            />
          </label>
        </div>
        <div className="book-form__element">
          <label className="book-form__label">
            Pages:
            <input
              className="book-form__input"
              type="number"
              name="pages"
              value={this.state.pages}
              onChange={this.handleChange}
              max="10000"
            />
          </label>
        </div>
        <div className="book-form__element">
          <label className="book-form__label custom-file-upload">
            Upload Book Cover
            <input
              className="book-form__input"
              type="file"
              ref={this.fileInput}
              name="cover"
              accept="image/*"
              onChange={this.handleFileInput}
            />
          </label>
        </div>
        <div className="book-form__control">
          <button
            type="submit"
            className="button button--primary book-form__add-button"
            value
          >
            Add
          </button>
          <button
            type="button"
            className="button button--secondary book-form__cancel-button"
            value
            onClick={this.handleCancelSubmit}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default BookForm;
