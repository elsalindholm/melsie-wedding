import './menu-section.scss';

import React, { CSSProperties } from 'react';
import BgImage from '../../assets/ZoomedCloseUpRight.jpg';

export const MenuSection: React.FC = () => {
  const props: CSSProperties = {
    backgroundImage: `url(${BgImage})`,
  };
  return (
    <div id='menu-anchor' className='menu-section'>
      <div className='image-container' style={props}></div>
      <div className='text-container'>
        <div className='type-title'>Menu</div>
        <div>
          <div className='course-type type-subheader'>starters</div>
          <div className='type-text'>
            Smoked Salmon Mousse, Beetroot Dressing & Pickled Cucumber
          </div>
          <div className='type-text'>Twice Baked Cheese Souffle, Pear and Walnut Salad</div>
        </div>
        <div>
          <div className='course-type type-subheader'>mains</div>
          <div className='type-text'>
            Balmoral Chicken, Buttered Mashed Potato, Grain Mustard & Whisky Sauce
          </div>
          <div className='type-text'>
            Pan Roasted Fillet of Salmon, Rosti Potato, Spinach, Citrus & Basil Sauce
          </div>
        </div>
        <div>
          <div className='course-type type-subheader'>desserts</div>
          <div className='type-text'>Cranachan</div>
          <div className='type-text'>Sticky Toffee Pudding</div>
        </div>
      </div>
    </div>
  );
};
