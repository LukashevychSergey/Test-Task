import React from 'react';
import logo from '../images/Logo.svg';

function Header() {
  return (
    <div style={{ width: '100%', backgroundColor: '#FFF' }}>
      <div style={{ width: '100%', backgroundColor: '#000', height: 60 }}></div>
      <div className="common-container">
        <div className="header__wrapper">
          <img src={logo} alt="#" />
          <div className="header__element">
            <button>Users</button>
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
