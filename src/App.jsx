import React from 'react';

import Main from './components/Main';
import BestTravels from './components/BestTravels';
import Header from './components/Header';
import Menu from './components/Menu';

import './App.css'

export default props => {
  return (
    <div className="App">
      <div>
        <Menu></Menu>
        <Header>
        </Header>
        <Main>
          <BestTravels></BestTravels>
        </Main>
      </div>
    </div>
  );
}