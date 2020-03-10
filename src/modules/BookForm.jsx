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

    this.clearFileUploadVisualCue = this.clearFileUploadVisualCue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancelSubmit = this.handleCancelSubmit.bind(this);
    this.handleFileInput = this.handleFileInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clearFileUploadVisualCue() {
    const previewDiv = document.querySelector(".file-preview");
    const previewText = document.createElement("p");

    while (previewDiv.firstChild) {
      previewDiv.removeChild(previewDiv.firstChild);
    }

    previewText.textContent = "No file currently selected for upload";
    previewDiv.append(previewText);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCancelSubmit() {
    this.props.handleFormToggle();
    this.clearFileUploadVisualCue();
  }

  async handleFileInput(event) {
    const input = event.target;
    const file = input.files[0];

    if (!file) {
      return;
    }

    const isFileSizeAppropriate = this.returnFileSizeValidity(input, file);

    if (!isFileSizeAppropriate) {
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
    this.clearFileUploadVisualCue();
  }

  returnFileSizeValidity(input, file) {
    // make sure file is less than 1000 kB
    const fileSize = (file.size / 1024).toFixed(1);
    const maxSize = 1000;

    this.setUploadStatusVisualCue(file, fileSize, maxSize);

    if (fileSize > maxSize) {
      input.setCustomValidity(
        `Please make sure your file is less than ${maxSize} kB`
      );
      return false;
    } else {
      input.setCustomValidity("");
      return true;
    }
  }

  setUploadStatusVisualCue(file, fileSize, maxSize) {
    const previewDiv = document.querySelector(".file-preview");
    const previewText = document.createElement("p");
    previewText.classList.add("file-preview__text");

    while (previewDiv.firstChild) {
      previewDiv.removeChild(previewDiv.firstChild);
    }

    if (!file) {
      previewText.textContent = "No file currently selected for upload";
      previewDiv.append(previewText);
      return;
    }

    if (fileSize > maxSize) {
      previewText.textContent = `"${file.name}" is too big (${fileSize} kB), choose one less than ${maxSize} kB`;
      previewDiv.append(previewText);
      return;
    }

    const previewImg = document.createElement("img");
    previewImg.classList.add("file-preview__cover");
    previewImg.src = URL.createObjectURL(file);
    previewText.textContent = `${file.name}, size: ${fileSize} kB`;
    previewDiv.append(previewText, previewImg);
  }

  render() {
    let formClass = "book-form";

    if (this.props.isFormHidden) {
      formClass += " book-form--hidden";
    }

    return (
      <form className={formClass} name="add-book" onSubmit={this.handleSubmit}>
        <div className="book-form__element">
          <label htmlFor="title" className="book-form__label">
            Title <span className="book__required">(required)</span>:
          </label>
          <input
            id="title"
            className="book-form__input"
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.handleChange}
            minLength="2"
            maxLength="50"
            required
          />
        </div>

        <div className="book-form__element">
          <label htmlFor="author" className="book-form__label">
            Author <span className="book__required">(required)</span>:
          </label>
          <input
            id="author"
            className="book-form__input"
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
            required
            minLength="2"
            maxLength="100"
          />
        </div>

        <div className="book-form__element">
          <label htmlFor="pages" className="book-form__label">
            Pages:
          </label>
          <input
            id="pages"
            className="book-form__input"
            type="number"
            name="pages"
            value={this.state.pages}
            onChange={this.handleChange}
            required
            min="1"
            max="10000"
          />
        </div>

        <div className="book-form__element">
          <label htmlFor="file" className="custom-file-upload">
            Upload Book Cover
          </label>
          <input
            id="file"
            className="book-form__input"
            type="file"
            ref={this.fileInput}
            name="cover"
            accept="image/*"
            onChange={this.handleFileInput}
          />
        </div>

        <div className="file-preview">
          <p className="file-preview__text">
            No file currently selected for upload
          </p>
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
