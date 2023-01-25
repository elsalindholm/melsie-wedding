import './location-section.scss';

import React, { CSSProperties } from 'react';
import HotelImage from '../../assets/KelsoBlackAndWhite.jpg';

export const LocationSection: React.FC = () => {
  const props: CSSProperties = {
    backgroundImage: `url(${HotelImage})`,
  };

  return (
    <div className='location-section'>
      <div className='image-container' style={props}></div>
      <div className='text-container'>
        <div className='type-title'>Location</div>
        <div className='type-text'>Our wedding will be held at</div>
        <div className='type-text'>
          Ednam House Hotel
          <br />
          12 Whatever Road
          <br />
          Kelso
          <br />
          AB1 CD2
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
