import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <h2>Logo</h2>
        <p>Explore different Recipes</p>
      </div>
      <div className="contact-container">
        <h2>Contact us</h2>
        <p>Blogify@gmail.com</p>
      </div>
      <div className="copy-container">
        <p>&copy; 2023 Blogify@gmail.com</p>
        <p>&copy; 2023 techarticles.com</p>
      </div>
    </div>
  );
}

export default Footer;
