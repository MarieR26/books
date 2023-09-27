import { useEffect, useContext } from "react";
// import uuid from "react-uuid";
import BooksContext from "./context/books";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const { stableFetchBooks } = useContext(BooksContext);

  useEffect(() => {
    stableFetchBooks();
  }, [stableFetchBooks]);

  // const editBookById = (id, newTitle) => {
  //   const updatedTitle = books.map((book) => {
  //     if (book.id === id) {
  //       return { ...books, title: newTitle };
  //     }

  //     return book;
  //   });

  //   setBooks(updatedTitle);
  // };

  // const createBook = (title) => {
  //   //instead of writing title: title, we just write title since it has the same name with parameter.
  //   const updatedArray = [...books, { id: uuid(), title }];

  //   setBooks(updatedArray);
  // };

  return (
    <div className="app">
      <h1>Reading List</h1>
      {/* <BookList books={books} onDelete={deleteBookId} onEdit={editBookById} />
      <BookCreate onCreate={createBook} /> */}
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
