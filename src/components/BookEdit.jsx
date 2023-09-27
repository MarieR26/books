import { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const { editBookById } = useContext(BooksContext);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // onEdit(book.id, title);
    // console.log("saved");
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        className="input"
        type="text"
        value={title}
        onChange={handleTitleChange}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
