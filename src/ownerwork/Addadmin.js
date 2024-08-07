import React, { useState } from 'react';
import './Addadmin.css'; 
import axios from 'axios';


function Addadmin() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    contact_number: '',
    role: '',
    lib_id: '',
    password: '',
    owner: '',
  });
  const token = sessionStorage.getItem("token");
 

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validate form fields
      if (!formData.id || !formData.name || !formData.email || !formData.contact_number || !formData.role || !formData.lib_id || !formData.password || !formData.owner) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }
      let body ={
        id: parseInt(formData.id),
        name: formData.name,
        email: formData.email,
        contact_number: parseInt(formData.contact_number), 
        password: formData.password,
        role: formData.role,
        libID: parseInt(formData.lib_id),
        owner: formData.owner,
      }

      // Send POST request to add admin
      await axios.post('http://localhost:8080/owner/api/admins', body,
     
      {
        headers: {
          "token": token,
        },
      }
    );
      
      setLoading(false);
      
      alert('Admin added successfully');
      
     


    } catch (error) {
      setError(error.response.data.error || 'Something went wrong');
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Add Admin</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input type="text" name="contact_number" value={formData.contact_number} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <input type="text" name="role" value={formData.role} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Library ID:</label>
          <input type="text" name="lib_id" value={formData.lib_id} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Owner:</label>
          <input type="email" name="owner" value={formData.owner} onChange={handleChange} />
        </div>
        <button type="submit" disabled={loading}>Add Admin</button>
      </form>
    </div>
  );
}

export default Addadmin;