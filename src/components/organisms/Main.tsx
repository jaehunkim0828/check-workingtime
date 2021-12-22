import React from 'react';

import Nav from '../molecules/Nav';
import Work from '../molecules/Work';
import Working from '../molecules/Working';

function Main() {
  return (
    <div id='main-container'>
      <Nav />
      <div className='content'>
        <Work />
        <Working />
      </div>
    </div>
  )
}

export default Main;