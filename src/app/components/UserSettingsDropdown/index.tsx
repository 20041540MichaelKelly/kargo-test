// Importing necessary modules and icons
import React from 'react';
import '../../styles/UsersSettingsDropdown.scss'; // Importing the styles for the UserSettingsDropdown component
import { MdDashboard } from 'react-icons/md'; // Importing the dashboard icon
import { PiPathThin } from "react-icons/pi"; // Importing the paths icon
import { FaPeopleGroup } from "react-icons/fa6"; // Importing the community icon
import { IoIosSettings } from "react-icons/io"; // Importing the settings icon
import { FaUserCircle } from "react-icons/fa"; // Importing the user icon
import { IoCloseSharp } from "react-icons/io5"; // Importing the close icon

// Defining the UserSettingsDropdown component
const UserSettingsDropdown: React.FC = () => {
  // The component returns a div with the class "user-settings-dropdown"
  // Inside this div, it renders a ul with the class "dropdown-menu"
  // The "dropdown-menu" ul contains a div with the class "user-icon" and several li elements
  // The "user-icon" div contains the close icon, the user icon, and the user's name and email
  // Each li element contains a link to a different page, with an icon and the page name
  return (
    <div className="user-settings-dropdown">
      <ul className="dropdown-menu">
        <div className="user-icon">
          <div className="cancel"> <IoCloseSharp /> </div> {/* Close icon */}
          <p><FaUserCircle size={30} color={'#ddd'} /></p> {/* User icon */}
          <p>John Doe</p> {/* User's name */}
          <p>johndoe@gmail.com</p> {/* User's email */}
        </div>
        <hr />
        <li><a href="#dashboard"><MdDashboard /> Dashboard</a></li> {/* Link to the dashboard */}
        <li><a href="#paths"><PiPathThin /> Paths</a></li> {/* Link to the paths */}
        <li><a href="#community"><FaPeopleGroup /> Community</a></li> {/* Link to the community */}
        <li><a href="#settings"><IoIosSettings /> Settings</a></li> {/* Link to the settings */}
      </ul>
    </div>
  );
};

// Exporting the UserSettingsDropdown component as the default export
export default UserSettingsDropdown;