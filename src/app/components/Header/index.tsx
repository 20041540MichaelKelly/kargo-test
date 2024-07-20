'use client';

// Importing necessary modules
import React, { useState } from 'react';
import '../../styles/Header.scss'; // Importing the styles for the Header component
import UserImage from '../../images/Vector.png'; // Importing the user image
import UserSettingsDropdown from '../UserSettingsDropdown'; // Importing the UserSettingsDropdown component

// Defining the Header component
const Header: React.FC = () => {
  // Using the useState hook to manage the state of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Defining a function to handle the click event on the user icon
  // This function toggles the state of the dropdown
  const handleUserIconClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // The component returns a header element with the class "header"
  // Inside this header, it renders a div with the class "container"
  // The "container" div contains the logo, a nav element, and a div with the class "user-icon"
  // The nav element contains a ul with several li elements, each containing a link to a different page
  // The "user-icon" div contains the user image and the UserSettingsDropdown component if isDropdownOpen is true
  return (
    <header className="header">
      <div className="container">
        <div className="logo">FRONTEND SCHOOL</div> {/* Logo */}
        <nav>
          <ul>
            <li><a href="#html-css">HTML & CSS</a></li> {/* Link to the HTML & CSS page */}
            <li><a href="#javascript">JavaScript</a></li> {/* Link to the JavaScript page */}
            <li><a href="#react">React</a></li> {/* Link to the React page */}
            <li><a href="#angular">Angular</a></li> {/* Link to the Angular page */}
            <li><a href="#vue">Vue</a></li> {/* Link to the Vue page */}
            <li><a href="#svelte">Svelte</a></li> {/* Link to the Svelte page */}
          </ul>
        </nav>
        <div className="user-icon" onClick={handleUserIconClick}>
          <img src={UserImage.src} alt="User Icon" /> {/* User image */}
          {isDropdownOpen && <UserSettingsDropdown />} {/* UserSettingsDropdown component if isDropdownOpen is true */}
        </div>
      </div>
    </header>
  );
};

// Exporting the Header component as the default export
export default Header;