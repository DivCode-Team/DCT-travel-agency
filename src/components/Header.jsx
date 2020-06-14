import React from 'react';

import './Header.css'


export default props => {
  return (
    <header>
      <div className="image blur"></div>
      <div className="modal">
        <div className="content">
          <div className="message">
            Exploring<span>The World</span>
          </div>
        </div>
      </div>
    </header>
  );
}
