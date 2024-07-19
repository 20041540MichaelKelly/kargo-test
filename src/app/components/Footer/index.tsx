import React from 'react';
import '../../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="logo">FRONTEND SCHOOL</div>
      <div className="container">
        <nav>
          <ul>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-of-use">Terms of Use</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </nav>
        <div className="copyright">&copy; Frontend 2023</div>
      </div>
    </footer>
  );
}

export default Footer;
