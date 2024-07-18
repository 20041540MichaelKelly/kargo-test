import React from 'react';
import '../../styles/Header.scss';
import UserImage from '../../images/Vector.png'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">FRONTEND SCHOOL</div>
        <nav>
          <ul>
            <li><a href="#html-css">HTML & CSS</a></li>
            <li><a href="#javascript">JavaScript</a></li>
            <li><a href="#react">React</a></li>
            <li><a href="#angular">Angular</a></li>
            <li><a href="#vue">Vue</a></li>
            <li><a href="#svelte">Svelte</a></li>
          </ul>
        </nav>
        <div className="user-icon">
          <img src={UserImage.src} alt="User Icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;