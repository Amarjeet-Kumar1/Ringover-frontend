import React from 'react';
import './NavHeader.css';

export default function NavHeader() {
  return (
    <div id="header">
      <div className="small-container">
        <div id="logo-container">
          <div id="logo-image">
            <img src="/images/websitelogo.png" alt="websitelogo" />
          </div>
        </div>
        <div id="nav-container">
          <div>
            <p>HOME</p>
          </div>
          <div>
            <p>THE JOURNEY</p>
          </div>
          <div>
            <p>TEAM</p>
          </div>
          <div>
            <p>STORE</p>
          </div>
          <div>
            <p>CONTACT</p>
          </div>
        </div>
        <div id="profile-container">
          <div>
            <p>GAGAN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
