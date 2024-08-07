import React, { useState, useEffect } from 'react';
import './Getallbook.css'; // Assuming you have a CSS file for styling
import axios from 'axios';

function Getallbook() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = sessionStorage.getItem("token");
  
  

  useEffect(() => {
    fetchBooks();
  }, []);

  
  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/book',
    
      {
        headers: {
          "token": token,
        },
      }
    
    );
      setBooks(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
      setLoading(false);
    }
  };

  return (
    <div className="book">
      <h1>Admin Book Management</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Library ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Version</th>
              <th>Total Copies</th>
              <th>Available Copies</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.isbn}>
                <td>{book.isbn}</td>
                <td>{book.libId}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.version}</td>
                <td>{book.totalCopies}</td>
                <td>{book.availableCopies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Getallbook;