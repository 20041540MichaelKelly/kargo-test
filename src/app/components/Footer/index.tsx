// Importing necessary modules
import React from 'react';
import '../../styles/Footer.scss'; // Importing the styles for the Footer component

// Defining the Footer component
const Footer: React.FC = () => {
  // The component returns a footer element with the class "footer"
  // Inside this footer, it renders a horizontal rule, a div with the class "logo", and a div with the class "container"
  // The "logo" div contains the text "FRONTEND SCHOOL"
  // The "container" div contains a nav element and a div with the class "copyright"
  // The nav element contains a ul with three li elements, each containing a link to a different page
  // The "copyright" div contains the text "&copy; Frontend 2023"
  return (
    <footer className="footer">
      <hr /> {/* Horizontal rule */}
      <div className="logo">FRONTEND SCHOOL</div> {/* Logo */}
      <div className="container">
        <nav>
          <ul>
            <li><a href="#privacy-policy">Privacy Policy</a></li> {/* Link to the privacy policy */}
            <li><a href="#terms-of-use">Terms of Use</a></li> {/* Link to the terms of use */}
            <li><a href="#contact-us">Contact Us</a></li> {/* Link to the contact us page */}
          </ul>
        </nav>
        <div className="copyright">&copy; Frontend 2023</div> {/* Copyright notice */}
      </div>
    </footer>
  );
}

// Exporting the Footer component as the default export
export default Footer;
