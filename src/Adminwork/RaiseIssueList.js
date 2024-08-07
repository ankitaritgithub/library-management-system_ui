import React, { useState, useEffect } from 'react';
import './RaiseIssueList.css'; 
import axios from 'axios';


function RaiseIssueList() {
  const [requestEvents, setRequestEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    // Fetch request events from the backend when the component mounts
    fetchRequestEvents();
  }, []);

  const token = sessionStorage.getItem("token");


  const fetchRequestEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/issue-requests',
    
      {
        headers: {
          "token": token,
        },
      }
    
    
    ); //  this endpoint is set up in of  backend
      setRequestEvents(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching request events:', error);
      setLoading(false);
    }
  };
  return (
    <div className="App">
      <h1>Admin Request Events</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Book ID</th>
              <th>Reader ID</th>
              <th>Request Date</th>
              <th>Approval Date</th>
              <th>Approver ID</th>
              <th>Request Type</th>
              <th>Status</th>
              
            </tr>
          </thead>
          <tbody>
            {requestEvents.map((event) => (
              <tr key={event.reqId}>
                <td>{event.reqId}</td>
                <td>{event.bookId}</td>
                <td>{event.readerId}</td>
                <td>{event.requestDate}</td>
                <td>{event.approvalDate}</td>
                <td>{event.approverId}</td>
                <td>{event.requestType}</td>
                <td>{event.status}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RaiseIssueList;