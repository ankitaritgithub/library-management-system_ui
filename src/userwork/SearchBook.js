import React, { useState } from 'react';
import axios from 'axios';
import './SearchBook.css'; // Import the CSS file we created

const SearchBook = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const token = sessionStorage.getItem("token");
  

  const handleSearch = async () => {
    // Basic validation
    if (!query) {
      setErrorMessage('Please enter a search query');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/user/books?q=${query}`,
    
      {
        headers: {
          "token": token,
        },
      }
    
    
    );
      if (response.status === 200) {
        setBooks(response.data);
      } else {
        setErrorMessage('Failed to fetch books');
      }
    } catch (error) {
      setErrorMessage('An error occurred');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Book Search</h1>
      <div className="form-group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <ul>
        {books.map((book) => (
          <li key={book.ISBN}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Available Copies: {book.availableCopies}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchBook;