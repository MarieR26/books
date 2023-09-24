import { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // onEdit(book.id, title);
    onSubmit(book.id, title);
    // console.log("saved");
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
