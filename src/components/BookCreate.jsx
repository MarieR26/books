import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);

    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add A Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          className="input"
          value={title}
          onChange={handleChange}
          type="text"
        />
        <button className="button" onClick={handleSubmit}>
          Create Book
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
