import React from 'react';

import './Header.css'


export default props => {
  return (
    <header id="header">
      <div className="image blur"></div>
      <div className="modal">
        <div className="content">
          <div className="message">
            Exploring<span>The World</span>
          </div>
          <div className="button">
            <a href="/">Get started</a>
          </div>
        </div>
      </div>
    </header>
  );
}
