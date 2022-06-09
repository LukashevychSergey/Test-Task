import React from 'react';
import logo from '../images/Logo.svg';
import { scrollTo } from '../scrollTo';

function Header({ userRef, formRef }) {
  return (
    <div className="header_block">
      <div className="black_block"></div>
      <div className="common-container">
        <div className="header__wrapper">
          <img src={logo} alt="#" />
          <div className="header__element">
            <button
              onClick={() => {
                scrollTo(userRef);
              }}
            >
              Users
            </button>

            <button
              onClick={() => {
                scrollTo(formRef);
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
