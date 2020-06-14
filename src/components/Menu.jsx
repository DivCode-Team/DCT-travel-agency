import React from 'react';

import './Menu.css';

export default () => {
  return(
    <div className="Menu">
      <div className="options">
        <div className="option">
          <a href="/">Home</a>
        </div>

        <div className="option">
          <a href="/">About</a>
        </div>

        <div className="option">
          <a href="/">Gallery</a>
        </div>

        <div className="option">
          <a href="/">Contacts</a>
        </div>

      </div>
    </div>
  );
}