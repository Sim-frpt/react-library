import placeHolder from "../assets/images/book-cover-placeholder.jpg";

const books = [];

const CreateBook = ({
  title,
  author,
  pages,
  cover = placeHolder,
  isRead = false
}) => {
  const id = books.length ? books.length + 1 : 1;
  const self = {
    id,
    title,
    author,
    pages,
    isRead,
    cover,
    toggleReadingStatus() {
      this.isRead = !this.isRead;
    }
  };

  updateBookArray(self);

  return self;
};

const updateBookArray = book => {
  books.push(book);
};

CreateBook({
  title: "test",
  author: "myself",
  pages: 423,
  cover: placeHolder
});

CreateBook({
  title: "test2",
  author: "anotherAuthor",
  pages: 123,
  cover: placeHolder
});

export { books, CreateBook };
