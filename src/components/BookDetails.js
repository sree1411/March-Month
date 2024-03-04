import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const BookDetails = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [show, setShow] = useState(false);
  const [editedBook, setEditedBook] = useState(null);

  useEffect(() => {
    fetchBookInfo();
  }, []);

  const addBook = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/posts', newBook);
    fetchBookInfo();
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:8000/posts/${id}`);
    fetchBookInfo();
  };

  const editBook = (book) => {
    setEditedBook({ ...book });
    setShow(true);
  };

  const updateBook = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/posts/${editedBook.id}`, editedBook);
    setShow(false);
    fetchBookInfo();
  };

  const fetchBookInfo = async () => {
    const response = await axios.get('http://localhost:8000/posts');
    setBooks(response.data);
  };

  return (
    <>
      {/* here i create the form and along with the  use the async await thing alternative approach
      for the crud operation */}


      <div>BookDetails</div>

      {!show && (
        <form onSubmit={addBook}>
          <input
            type="text"
            placeholder="enter the title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="enter the author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />
          <button type="submit">Add book</button>
        </form>
      )}

      {show && (
        <form onSubmit={updateBook}>
          <input
            type="text"
            placeholder="enter the title"
            value={editedBook.title}
            onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="enter the author"
            value={editedBook.author}
            onChange={(e) => setEditedBook({ ...editedBook, author: e.target.value })}
          />
          <button type="submit">Update book</button>
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
