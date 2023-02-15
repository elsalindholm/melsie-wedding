import './menu-section.scss';

import React, { CSSProperties } from 'react';
import BgImage from '../../assets/CloseUpRight.jpg';

export const MenuSection: React.FC = () => {
  const props: CSSProperties = {
    backgroundImage: `url(${BgImage})`,
  };
  return (
    <div id='menu-anchor' className='menu-section'>
      <div className='image-container' style={props}></div>
      <div className='text-container'>
        <div className='type-title'>Menu</div>

        <div className='type-text'>
          We're still picking our menu for the reception. Once it's ready we will ask you to pick
          your menu choices.
        </div>

        {/*<div>
          <div className='course-type type-text type-semibold'>Starters</div>
          <div className='type-text'>
            Starter 1 - salmon with potatoes and all kinds of fancy bits
          </div>
          <div className='type-text'>Starter 2 - ham and cheese sandwich</div>
          <div className='type-text'>Starter 3 - vegan option</div>
        </div>
        <div>
          <div className='course-type type-text type-semibold'>Mains</div>
          <div className='type-text'>Main 1 - haggis and potatoes</div>
          <div className='type-text'>Main 2 - salmon and potatoes with all kinds of greenery</div>
          <div className='type-text'>Main 3 - vegan option</div>
        </div>
        <div>
          <div className='course-type type-text type-semibold'>Desserts</div>
          <div className='type-text'>Dessert 1 - raspberry cheese cake</div>
          <div className='type-text'>Dessert 2 - sticky toffee pudding and ice cream</div>
          <div></div>
        </div>
        <div className='type-text'>
          Above you can find our wedding reception menu. Please choose one option for each course
          and let us know your choices when you RSVP to our invitation. We have been advised of the
          common allergens in the dishes, but we kindly ask you to let us know of any dietary
          requirements when RSVPing so that we can make sure our venue can cater to your needs.
  </div>*/}
      </div>
    </div>
  );
};
