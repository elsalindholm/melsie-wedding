import './menu-section.scss';

import React, { CSSProperties } from 'react';
import BgImage from '../../assets/SouthQueensferryTrees.jpg';

export const MenuSection: React.FC = () => {
  const props: CSSProperties = {
    backgroundImage: `url(${BgImage})`,
  };
  return (
    <div className='menu-section'>
      <div className='image-container' style={props}></div>
      <div className='text-container'>
        <div className='type-title'>Menu</div>
        <div>
          <div className='course-type type-text type-semibold'>Starters</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div className='course-type type-text type-semibold'>Mains</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div className='course-type type-text type-semibold'>Desserts</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
