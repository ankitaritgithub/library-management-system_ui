// import React from 'react'
import "./Style.css";
import Login from "./Login";
import SignUp from "./SignUp";
import React, { useState } from "react";

function Home() {
  const [type, setType] = useState("login");
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">
          <div className={containerClass} id="container">
            <SignUp handleOnClick={handleOnClick}/>
            <Login />
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    className="ghost"
                    id="login"
                    onClick={() => handleOnClick("login")}
                  >
                    login
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button
                    className="ghost "
                    id="signUp"
                    onClick={() => handleOnClick("signUp")}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Home;
