import React, { useState } from 'react';
import axios from 'axios';
import './UpdateBook.css'; // Import CSS file
import { useNavigate } from "react-router-dom";
 
function UpdateBook() {
  const [isbn, setIsbn] = useState('');
  const [libID, setLibID] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publisher, setPublisher] = useState('');
  const [version, setVersion] = useState('');
  const [totalCopies, setTotalCopies] = useState('');
  const [availableCopies, setAvailableCopies] = useState('');
  const [error, setError] = useState('');

  const token = sessionStorage.getItem("token");
  

  const navigate = useNavigate()
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isbn || !title || !author || !publisher || !version || !totalCopies || !availableCopies) {
      setError('Please fill in all fields');
      return;
    }
    try {
      const response = await axios.put(`http://localhost:8080/admin/update-book/${isbn}`, {
        isbn: parseInt(isbn),
        libID: parseInt(libID),
        title,
        author,
        publisher,
        version,
        totalCopies: parseInt(totalCopies),
        availableCopies: parseInt(availableCopies)
      },
      {
        headers: {
          token: token,
        },
      }
    
    
    );
      console.log(response.data);
      navigate("/getallbook");
      // Handle success
    } catch (error) {
      console.error(error);
      setError('Error updating book');
    }
  };
 
  return (
    <div className="update-book-container">
      <h2>Update Book</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          ISBN:
          <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} />
        </label>
        <br />
        <label>
        LibID:
          <input type="text" value={libID} onChange={(e) => setLibID(e.target.value)} />
        </label>
        <br />
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <br />
        <label>
          Publisher:
          <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
        </label>
        <br />
        <label>
          Version:
          <input type="text" value={version} onChange={(e) => setVersion(e.target.value)} />
        </label>
        <br />
        <label>
          Total Copies:
          <input type="number" value={totalCopies} onChange={(e) => setTotalCopies(e.target.value)} />
        </label>
        <br />
        <label>
          Available Copies:
          <input type="number" value={availableCopies} onChange={(e) => setAvailableCopies(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
 
export default UpdateBook;