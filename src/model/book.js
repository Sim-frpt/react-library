import placeHolder from "../assets/images/book-cover-placeholder.jpg";

const CreateBook = ({
  id,
  title,
  author,
  pages,
  cover = placeHolder,
  isRead = false
}) => {
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

  return self;
};

export { CreateBook };
