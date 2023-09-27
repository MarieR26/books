import { createContext, useCallback, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  const stableFetchBooks = useCallback(fetchBooks, []);

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

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedArray = [...books, response.data];

    setBooks(updatedArray);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
    stableFetchBooks,
  };

  //returning provider and share the object:
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export { Provider };
export default BooksContext;
