import React from 'react';
import '../../styles/UsersSettingsDropdown.scss';
import { MdDashboard } from 'react-icons/md';
import { PiPathThin } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const UserSettingsDropdown: React.FC = () => {

  return (
      <div className="user-settings-dropdown">
          <ul className="dropdown-menu">
              <div className="user-icon">
                  <div className="cancel"> <IoCloseSharp /> </div>
                  <p><FaUserCircle size={30} color={'#ddd'} /></p>
                  <p>   John Doe</p>
                  <p>   johndoe@gmail.com</p>
             </div>
            <hr />
            <li><a href="#dashboard"><MdDashboard />  Dashboard</a></li>
            <li><a href="#paths"><PiPathThin />  Paths</a></li>
            <li><a href="#community"><FaPeopleGroup />  Community</a></li>
            <li><a href="#settings"><IoIosSettings />  Settings</a></li>
        </ul>
    </div>
  );
};

export default UserSettingsDropdown;