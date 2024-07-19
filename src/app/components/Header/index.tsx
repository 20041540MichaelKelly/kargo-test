'use client';

import React, { useState } from 'react';
import '../../styles/Header.scss';
import UserImage from '../../images/Vector.png'
import UserSettingsDropdown from '../UserSettingsDropdown';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleUserIconClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
        <div className="user-icon" onClick={handleUserIconClick}>
          <img src={UserImage.src} alt="User Icon" />
          {isDropdownOpen && <UserSettingsDropdown />}
        </div>
      </div>
    </header>
  );
};

export default Header;