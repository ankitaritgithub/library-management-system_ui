import React, { useState } from "react";
import axios from "axios";
import "./Style.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate()

  const handleChange = evt => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!state.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = "Email address is invalid";
    }
    if (!state.password) {
      errors.password = "Password is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleOnSubmit = async evt => {
    evt.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:8080/login", state);

        const data = response.data;
        sessionStorage.setItem('token', data?.token);
        sessionStorage.setItem("user", JSON.stringify(data?.user));
        if (data?.user?.role === "owner") {
          navigate("/ownerPage");
        }
        if (data?.user?.role === "admin") {
          navigate("/adminHome");
        }
        if (data?.user?.role === "user") {
          navigate("/userHome");
        }
        
        if (response.status !== 200) {
          throw new Error("Login failed");
        }

        alert("Login successful!");
        
        // Redirect or do something else after successful login
     } catch (error) {
        console.error("Login error:", error);
        alert("Login failed");
      }
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Login</h1>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;