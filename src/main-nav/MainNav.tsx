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
        <button className='menu-button'>
          <div className='burger-slice'></div>
          <div className='burger-slice'></div>
          <div className='burger-slice'></div>
        </button>
        <div className='dropdown-menu'>
          <div className='dropdown-link'>wedding</div>
          <div className='dropdown-link'>location</div>
          <div className='dropdown-link'>accommodation</div>
          <div className='dropdown-link'>menu</div>
          <div className='dropdown-link'>dress code</div>
          <div className='dropdown-link'>registry</div>
          <div className='dropdown-link'>rsvp</div>
        </div>
      </div>
    </div>
  );
};
