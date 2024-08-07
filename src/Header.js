import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWWuf0zf_oqYEKWzUSIrHEepyyLYmdUpp2JBD53jG&s"
      />
      <div className="header__nav">
        <div className="header__option">
          <Link to="/home" className="header__optionLineOne">
            Signin/Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
