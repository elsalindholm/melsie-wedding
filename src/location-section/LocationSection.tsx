import './location-section.scss';

import React, { CSSProperties } from 'react';
import HotelImage from '../../assets/KelsoBlackAndWhite.jpg';

export const LocationSection: React.FC = () => {
  const props: CSSProperties = {
    backgroundImage: `url(${HotelImage})`,
  };

  return (
    <div id='location-anchor' className='location-section'>
      <div className='image-container' style={props}></div>
      <div className='text-container'>
        <div className='type-title'>Location</div>
        <div className='type-text'>Our wedding will be held at</div>
        <div className='type-text type-semibold'>
          Ednam House
          <br />
          Bridge Street
          <br />
          Kelso TD5 7HT
          <br />
          Scotland, UK
        </div>
        <div className='type-text'>
          The Georgian country house is located in the market town of Kelso in the heart of the
          Scottish Borders on the bank of River Tweed.
        </div>
      </div>
    </div>
  );
};
