import { useState, useEffect } from "react";
// import uuid from "react-uuid";
import axios from "axios";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  // const editBookById = (id, newTitle) => {
  //   const updatedTitle = books.map((book) => {
  //     if (book.id === id) {
  //       return { ...books, title: newTitle };
  //     }

  //     return book;
  //   });

  //   setBooks(updatedTitle);
  // };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedTitle = books.map((book) => {
      if (book.id === id) {
        return { ...books, ...response.data };
      }

      return book;
    });

    setBooks(updatedTitle);
  };

  const deleteBookId = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  // const createBook = (title) => {
  //   //instead of writing title: title, we just write title since it has the same name with parameter.
  //   const updatedArray = [...books, { id: uuid(), title }];

  //   setBooks(updatedArray);
  // };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedArray = [...books, response.data];

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
