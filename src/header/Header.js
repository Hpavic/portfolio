import React from 'react';
import './Header.css';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import userData from '../data/userProfile.json'

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={userData.profilePicPath} alt={userData.fullName} className="profile-pic" />
      </div>
      <div className="header-right">
        <div className="header-info">
          <h1>{userData.fullName}</h1>
          <p><MdLocationOn /> {userData.location}</p>
          <p>
            <MdEmail />
            <a href={`mailto:${userData.email}`} className="email-link">
              {userData.email}
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
