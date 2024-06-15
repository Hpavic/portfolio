import React from 'react';
import './Header.css';
import { MdLocationOn, MdEmail } from 'react-icons/md';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/images/test.jpg" alt="Hrvoje Pavić" className="profile-pic" />
      </div>
      <div className="header-right">
        <div className="header-info">
          <h1>Hrvoje Pavić</h1>
          <p><MdLocationOn /> Zagreb, Croatia</p>
          <p>
            <MdEmail />
            <a href="mailto:hrvoje.pavic994@gmail.com" className="email-link">
              hrvoje.pavic994@gmail.com
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
