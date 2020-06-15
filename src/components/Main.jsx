import React from 'react';

import './Main.css';

export default props => {
  
  return (
    <main>
      <div className="bestTravels">
        <h1 className="title">Best <span>Travels</span></h1>
        {props.children}
      </div>
    </main>
  )
}