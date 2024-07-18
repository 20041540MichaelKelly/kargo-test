import React from 'react';
import '../../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2023 Frontend School</p>
        <ul>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
                  <li><a href="#terms-of-use">Terms of Use</a></li>
                  <li><a href="#contact-us">Contact Us</a></li>
              </ul>
          </div>
      </footer>
  );
}

export default Footer;