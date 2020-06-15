import React from 'react';

import './Menu.css';

export default () => {
  return(
    <div className="Menu">
      <div className="options">
        <div className="option">
          <a href="#header">Home</a>
        </div>

        <div className="option">
          <a href="#cards">Travels</a>
        </div>

        <div className="option">
          <a href="#about">About</a>
        </div>

        <div className="option">
          <a href="#contacts">Contacts</a>
        </div>

      </div>
    </div>
  );
}