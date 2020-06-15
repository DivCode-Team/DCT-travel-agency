import React from 'react';
// MAX TRAVELS === 3
import './BestTravels.css';

import informationOfTravels from '../database/informationOfTravels';

export default props => {
  const travelsCard = informationOfTravels.map( travel => {
    let styleImage = {
      background: `url(${travel.url})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    };

    return (
      <div className="card" key={travel.id} style={styleImage}>
        <div className="name">{travel.name}</div>
      </div>
    );
  });
  return (
    <div id="cards" className="cards">
      {travelsCard}
    </div>
  );
}