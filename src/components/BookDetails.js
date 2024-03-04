import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';

export const BookDetails = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [show, setShow] = useState(false);
  const [editedBook, setEditedBook] = useState(null);
  const titleInputRef = useRef(null);
  const authorInputRef = useRef(null);

  useEffect(() => {
    fetchBookInfo();
  }, []);

  const addBook = async () => {
    await axios.post('http://localhost:8000/posts', newBook);
    fetchBookInfo();
    setNewBook({ title: '', author: '' }); // Clear input fields after adding book
    titleInputRef.current.focus(); // Move focus back to the title input field
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:8000/posts/${id}`);
    fetchBookInfo();
  };

  const editBook = (book) => {
    setEditedBook({ ...book });
    setShow(true);
  };

  const updateBook = async () => {
    await axios.put(`http://localhost:8000/posts/${editedBook.id}`, editedBook);
    setShow(false);
    fetchBookInfo();
  };

  const fetchBookInfo = async () => {
    const response = await axios.get('http://localhost:8000/posts');
    setBooks(response.data);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (e.target.name === 'title') {
        authorInputRef.current.focus();
      } else if (e.target.name === 'author') {
        e.preventDefault(); // Prevent form submission
        addBook();
      }
    }
  };

  return (
    <>
      <div>BookDetails</div>

      {!show && (
        <form>
          <input
            type="text"
            name="title"
            placeholder="enter the title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            onKeyDown={handleKeyPress}
            ref={titleInputRef}
            tabIndex={1}
          />
          <input
            type="text"
            name="author"
            placeholder="enter the author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            onKeyDown={handleKeyPress}
            ref={authorInputRef}
            tabIndex={2}
          />
          <button type="button" onClick={addBook} tabIndex={3}>
            Add book
          </button>
        </form>
      )}

      {show && (
        <form>
          <input
            type="text"
            name="title"
            placeholder="enter the title"
            value={editedBook.title}
            onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
            onKeyDown={handleKeyPress}
            tabIndex={1}
          />
          <input
            type="text"
            name="author"
            placeholder="enter the author"
            value={editedBook.author}
            onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
            onKeyDown={handleKeyPress}
            tabIndex={2}
          />
          <button type="button" onClick={updateBook} tabIndex={3}>
            Update book
          </button>
        </form>
      )}

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
            <button onClick={() => editBook(book)}>Edit</button>
          </li>
        ))}
      </ul>
    </>
  );
};
