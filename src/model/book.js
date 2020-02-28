import placeHolder from "../assets/images/book-cover-placeholder.jpg";

const books = [];

const createBook = ({
  title,
  author,
  pages,
  isRead = false,
  img = placeHolder
}) => {
  const id = books.length ? books.length + 1 : 1;

  const toggleReadingStatus = () => {
    this.isRead = !this.isRead;
  };

  return {
    id,
    title,
    author,
    pages,
    isRead,
    img,
    toggleReadingStatus
  };
};

export { books, createBook };
