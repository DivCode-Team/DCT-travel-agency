import React from 'react';

import Contact from './components/Contacts';
import About from './components/About';
import Main from './components/Main';
import BestTravels from './components/BestTravels';
import Header from './components/Header';
import Menu from './components/Menu';

import './App.css'

export default props => {
  return (
    <div className="App">
      <div>
        <Menu />
        <Header />
        <Main>
          <BestTravels />
        </Main>
        <About />
        <Contact />
      </div>
    </div>
  );
}