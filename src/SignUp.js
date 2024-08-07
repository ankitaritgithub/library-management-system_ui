import React, { useState } from "react";
import axios from "axios";
import "./Style.css";


function SignUp({ handleOnClick }) {
  const [state, setState] = useState({
    id: "",
    name: "",
    email: "",
    contact_number: "", 
    password: "",
    role: "",
    lib_id: "",
  });
  
  const [errors, setErrors] = useState({});

 

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };


  const validateForm = () => {
    const errors = {};
    if (!state.name.trim()) {
      errors.name = "Name is required";
    }
    if (!state.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = "Email is invalid";
    }
    if (!state.password.trim()) {
      errors.password = "Password is required";
    } else if (state.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!state.role.trim()) {
      errors.role = "Role is required";
    }
    if (!state.lib_id.trim()) {
      errors.libID = "LIBID is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };



  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    if (!validateForm()) {
      return;
    }

    let body ={
      id: parseInt(state.id),
      name: state.name,
      email: state.email,
      contact_number: parseInt(state.contact_number), 
      password: state.password,
      role: state.role,
      lib_id: parseInt(state.libID),
    }

    try {
      const response = await axios.post("http://localhost:8080/signup", body);

      if (!response.data.success) {
        throw new Error("Failed to sign up");
      }

      alert("Signup successful!");
      console.log(response.data); // Log the response from the backend
      // Optionally, redirect the user to a login page or other page
      handleOnClick("login")
    } catch (error) {
      console.error("Error signing up:", error);
      const err = error?.response?.data?.error || "Failed to sign up. Please try again later."
      alert(err);
    }

    // Clear form fields after submission
    setState({
      id: "",
      name: "",
      email: "",
      contact_number: "",  
      password: "",
      role: "",
      lib_id: "",
    });
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        
        <span>Use your email for registration</span>
        <input
          type="text"
          name="id"
          value={state.id}
          onChange={handleChange}
          placeholder="ID"
        />
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="text"
          name="contact_number"
          value={state.contact_number}
          onChange={handleChange}
          placeholder="ContactNumber"
        />
        
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <input
          type="text"
          name="role"
          value={state.role}
          onChange={handleChange}
          placeholder="Role"
        />
        {errors.role && <p className="error">{errors.role}</p>}
        <input
          type="text"
          name="lib_id"
          value={state.lib_id}
          onChange={handleChange}
          placeholder="LIBID"
        />
        {errors.lib_id && <p className="error">{errors.lib_id}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
