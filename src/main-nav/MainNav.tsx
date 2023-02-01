import './main-nav.scss';

import React, { CSSProperties } from 'react';
import BannerImage from '../../assets/SouthQueensferryTrees.jpg';

export const MainNav: React.FC = () => {
  const props: CSSProperties = {
    backgroundImage: `url(${BannerImage})`,
  };

  return (
    <div className='main-nav'>
      <div className='img-container' style={props}></div>
      <div className='desktop-link-container'>
        <div className='nav-link type-text'>wedding</div>
        <div className='nav-link type-text'>location</div>
        <div className='nav-link type-text'>accommodation</div>
        <div className='nav-link type-text'>menu</div>
        <div className='nav-link type-text'>dress code</div>
        <div className='nav-link type-text'>registry</div>
        <div className='nav-link type-text'>rsvp</div>
      </div>
      <div className='mobile-link-container'>
        <button>menu</button>
      </div>
    </div>
  );
};
