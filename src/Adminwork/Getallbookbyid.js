import React, { useState } from 'react';
import './Getallbookbyid'; // Assuming you have a CSS file for styling
import axios from 'axios';


function Getallbookbyid() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [id, setId] = useState('');

 

  const handleInputChange = (event) => {
    setId(event.target.value);
  };

  const token = sessionStorage.getItem("token");
  

  const getBookById = async () => {
    setLoading(true);
    setError(null);
    try {
      // Validate input
      if (!id.trim()) {
        setError('Please enter a valid Book ID');
        setLoading(false);
        return;
      }
    

      const response = await axios.get(`http://localhost:8080/admin/book/${id}`,
      
      {
        headers: {
          "token": token,
        },
      }
    
    
    );
      setBook(response.data);
     
    } catch (error) {
      setError(error.response.data.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Admin Book Management</h1>
      <div className="search-container">
        <input type="text" value={id} onChange={handleInputChange} placeholder="Enter Book ID" />
        <button onClick={getBookById}>Search</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {book && (
        <div className="book-details">
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Publisher: {book.publisher}</p>
          <p>ISBN: {book.isbn}</p>
          <p>Library ID: {book.libId}</p>
          <p>Total Copies: {book.totalCopies}</p>
          <p>Available Copies: {book.availableCopies}</p>
        </div>
      )}
    </div>
  );
}

export default Getallbookbyid;