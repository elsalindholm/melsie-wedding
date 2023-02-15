import './registry-section.scss';

import React, { CSSProperties } from 'react';
import BgImage from '../../assets/CloseUpLeft.jpg';

export const RegistrySection: React.FC = () => {
  const props: CSSProperties = {
    backgroundImage: `url(${BgImage})`,
  };

  return (
    <div id='registry-anchor' className='registry-section'>
      <div className='image-container' style={props}></div>
      <div className='image-filter'></div>
      <div className='text-container'>
        <div className='background-filter'></div>
        <div>
          <div className='type-title'>Registry</div>
          {/*<div className='type-text'>
            The best present you could possibly give us is the celebration of our marriage.
          </div>
          <div className='type-text'>
            However, if you'd still like to spoil us, we've picked out a
  </div>*/}
          <div>Section still under construction...</div>
        </div>
      </div>
    </div>
  );
};
