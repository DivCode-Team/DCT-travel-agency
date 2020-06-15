import React from 'react';

import './Main.css';

export default props => {
  
  return (
    <main>
      <div className="image">
        {props.children}
      </div>
    </main>
  )
}