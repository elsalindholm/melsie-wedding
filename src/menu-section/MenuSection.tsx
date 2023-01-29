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
        <div className='type-text'>
          Above you can find our wedding reception menu. Please choose one option for each course
          and let us know your choices when you RSVP to our invitation. We have been advised of the
          common allergens in the dishes, but we kindly ask you to let us know of any dietary
          requirements when RSVPing so that we can make sure our venue can cater to your needs.
        </div>
      </div>
    </div>
  );
};
