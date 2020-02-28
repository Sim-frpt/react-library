import React, { Component } from "react";

export class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      image: ""
    };

    this.fileInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form className="book-form" onSubmit={this.handleSubmit}>
        <div className="book-form__element">
          <label>
            Title:
            <input
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
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="book-form__element">
          <label>
            Image:
            <input type="file" ref={this.fileInput} name="file" />
          </label>
        </div>
        <div className="book-form__control">
          <button type="submit" value>
            Add
          </button>
          <button type="button" value>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default BookForm;
