import { useState } from "react";
import uuid from "react-uuid";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedTitle = books.map((book) => {
      if (book.id === id) {
        return { ...books, title: newTitle };
      }

      return book;
    });

    setBooks(updatedTitle);
  };

  const deleteBookId = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    //instead of writing title: title, we just write title since it has the same name with parameter.
    const updatedArray = [...books, { id: uuid(), title }];

    setBooks(updatedArray);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookId} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
