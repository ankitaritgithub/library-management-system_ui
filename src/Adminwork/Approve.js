import React, { useState} from 'react';
import './Approve.css'; 
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Approve() {
  const [reqId, setReqId ] = useState('');
  const [adminId, setAdminId] = useState('');
  const [error, setError] = useState("");
  

  const token = sessionStorage.getItem("token");
  

  const navigate = useNavigate()
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reqId || !adminId ) {
      setError('Please fill in all fields');
      return;
    }
    try {
      const response = await axios.put(`http://localhost:8080/admin/issue-requests/approve`, {
        reqId: parseInt(reqId),
        adminId: parseInt(adminId),
        
      },
      {
        headers: {
          token: token,
        },
      }


    );
    console.log(response.data);
    navigate("/raiseIssueList");
    // Handle success
  } catch (error) {
    console.error(error);
    setError('Error approve book');
  }
};
 
return (
  <div className="Approve-book-container">
    <h2>Approve Book</h2>
    {error && <p className="error-message">{error}</p>}
    <form onSubmit={handleSubmit}>
      <label>
      ReqId:
        <input type="text" value={reqId} onChange={(e) => setReqId(e.target.value)} />
      </label>
      <br />
      <label>
      AdminId:
        <input type="text" value={adminId} onChange={(e) => setAdminId(e.target.value)} />
      </label>
      <br />
      <button type="submit">APPROVE</button>
      </form>
    </div>
  );
}

export default Approve;