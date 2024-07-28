import React, { useState } from 'react';
import BookForm from '../components/BookForm';

// Main dashboard for managing books and authors
const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const handleAddBook = (values) => {
    setBooks([...books, { ...values, id: Date.now() }]);
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  const handleUpdateBook = (values) => {
    setBooks(books.map((book) => (book.id === values.id ? values : book)));
    setEditingBook(null);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Library Management Dashboard</h1>
      <div>
        <h2>{editingBook ? 'Edit Book' : 'Add Book'}</h2>
        <BookForm
          initialValues={editingBook || { title: '', author: '', isbn: '', publicationDate: '' }}
          onSubmit={editingBook ? handleUpdateBook : handleAddBook}
        />
      </div>
      <div>
        <h2>Books</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author} (ISBN: {book.isbn}, Published on: {book.publicationDate})
              <button onClick={() => handleEditBook(book)}>Edit</button>
              <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
