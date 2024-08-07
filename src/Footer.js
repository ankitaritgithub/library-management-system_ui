import React from 'react';
import "./Footer.css";

function Footer() {
  return (
        <footer className="footer">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>We are a team of developers who are passionate about building library management systems.</p>
          </div>
          <div className="footer-section features">
            <h3>Features</h3>
            <ul>
              <li>Search and borrow books</li>
              <li>Manage your account</li>
              <li>View your borrowing history</li>
              <li>Reserve books in advance</li>
            </ul>
          </div>
          <div className="footer-section thankyou">
            <h3>Thank You</h3>
            <p>Thank you for choosing our library management system. We hope you have a great experience using it!</p>
          </div>
        </footer>
      );
    };
    
export default Footer;
