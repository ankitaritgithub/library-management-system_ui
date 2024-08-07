import React, { useState } from 'react';
import axios from 'axios';
import './DeleteBook.css';
import { useNavigate } from "react-router-dom"; 

function DeleteBook() {
  const [BookId, setBookId] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate()


  const handleInputChange = (event) => {
    setBookId(event.target.value);
  };

  

  const handleDelete = async () => {
    if (!BookId.trim()) {
      setError('Please enter a valid Book ID');
      return;
    }
    try {
      const response = await axios.delete(`http://localhost:8080/admin/book/${BookId}`,

      {
        headers: {
          "token": token,
        },
      }
    
    );
      setMessage(response.data.message);
      navigate("/getallbook");
      setError('');
      setBookId('');
    } catch (error) {
      setMessage('');
      setError(error.response.data.error);
    }
  };

  return (
    <div className="delete-book-container">
      <h1>Delete Book</h1>
      <div className="form-group">
        <label htmlFor="BookId">Book ID:</label>
        <input
          type="text"
          id="BookId"
          name="BookId"
          value={BookId}
          onChange={handleInputChange}
        />
        {error && <p className="error-message">{error}</p>}
      </div>
      <button onClick={handleDelete}>Delete Book</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default DeleteBook;