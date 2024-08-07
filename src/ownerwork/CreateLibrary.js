import React, { useState } from 'react';
import axios from 'axios';
import "./CreateLibrary.css";
import { useNavigate } from "react-router-dom";

const CreateLibrary = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    lib_name: ''
  });

  const token = sessionStorage.getItem("token");
  

  const navigate = useNavigate()


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/owner/library', formData,
    
      {
        headers: {
          "token": token,
        },
      }
    
    
    
    );
    // alert("Library Created!");
      console.log(response.data);
      navigate("/ownerPage");
      // Handle success
    } catch (error) {
      console.error('Error creating library:', error);
      // Handle error
    }
  };

  return (
    <div className="library-form-container">
      <h2>Create Library</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        
        <label htmlFor="libraryName">Library Name:</label>
        <input type="text" name="lib_name" value={formData.libraryName} onChange={handleChange} required />
        
        <button type="submit">Create Library</button>
      </form>
    </div>
  );
};

export default CreateLibrary;