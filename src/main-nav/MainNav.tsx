import './main-nav.scss';

import React from 'react';

export const MainNav: React.FC = () => {
  return (
    <div className='main-nav'>
      <div className='nav-link type-text'>wedding</div>
      <div className='nav-link type-text'>location</div>
      <div className='nav-link type-text'>accommodation</div>
      <div className='nav-link type-text'>menu</div>
      <div className='nav-link type-text'>dress code</div>
      <div className='nav-link type-text'>registry</div>
      <div className='nav-link type-text'>rsvp</div>
    </div>
  );
};
