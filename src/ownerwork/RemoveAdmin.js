import React, { useState } from 'react';
import axios from 'axios';
import './RemoveAdmin.css'; // Import the CSS file we created

const RemoveAdmin = () => {
  const [adminId, setAdminId] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!adminId || isNaN(adminId)) {
      setErrorMessage('Please enter a valid admin ID');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:8080/owner/api/admins/${adminId}`,
    
      {
        headers: {
          "token": token,
        },
      }
    
    
    
    );
      if (response.status === 200) {
        setMessage(response.data.message);
      } else {
        setErrorMessage(response.data.error || 'Failed to remove admin');
      }
    } catch (error) {
      setErrorMessage('An error occurred');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Remove Admin</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="adminId">Admin ID:</label>
          <input
            type="text"
            id="adminId"
            name="adminId"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {message && <p>{message}</p>}
        <button type="submit">Remove Admin</button>
      </form>
    </div>
  );
};

export default RemoveAdmin;