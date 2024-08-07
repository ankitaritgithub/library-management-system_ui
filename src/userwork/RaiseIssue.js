import React, { useState } from 'react';
import axios from 'axios';
import './RaiseIssue.css'; 

const RaiseIssue= () => {
  const [formData, setFormData] = useState({
    reqId: '',
    bookId: '',
    readerId: '',
    requestType: '',
   
  });
   
  const token = sessionStorage.getItem("token");
  



  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Frontend validation
    if (!formData.reqId || !formData.bookId || !formData.readerId || !formData.requestType)  {
      setError('All fields are required');
      return;
    }

    let body = {
        reqId: parseInt(formData.reqId),
        bookId: parseInt(formData.bookId),
        readerId: parseInt(formData.readerId),
        requestType: formData.requestType,
      
      };

    try {
      const res = await axios.post('http://localhost:8080/user/raise-issue', body,
      

      {
        headers: {
          "token": token,
        },
      }
    
    
    
    );
      console.log('Issue request submitted:', res.data);
      // Optionally, show a success message or redirect the user
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('An error occurred while submitting the issue request');
      }
    }
  };

  return (
    <div className="issue-form-container">
      <h2>Request Book Issue</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="issueId">ReqId:</label>
          <input type="text" id="reqId" name="reqId" value={formData.reqId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="isbn">BookId:</label>
          <input type="text" id="bookId" name="bookId" value={formData.bookId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="readerId">Reader ID:</label>
          <input type="text" id="readerId" name="readerId" value={formData.readerId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="issueApproverId">RequestType:</label>
          <input type="text" id="requestType" name="requestType" value={formData.requestType} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default RaiseIssue;