import React from 'react';

import Header from './components/Header';
import Menu from './components/Menu';

import './App.css'

export default props => {
  return (
    <div className="App">
      <div>
        <Menu></Menu>
        <Header></Header>
      </div>
    </div>
  );
}