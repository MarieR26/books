import { useState, useContext } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState();

  const { deleteBookById } = useContext(BooksContext);

  const handleEditClick = () => {
    //toggle the show edit boolean value:
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  //logic to show edit content:
  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/200/200`} alt="books" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
