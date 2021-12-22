import React from 'react';

import Nav from '../molecules/Nav';
import Work from '../molecules/Work';

function Main() {
  return (
    <div id='main-container'>
      <Nav />
      <div>
        <Work />
      </div>
    </div>
  )
}

export default Main;