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
        <div className='text-wrapper'>
          <div className='type-title'>Registry</div>
          <div className='type-text'>
            The best present you could possibly give us is the celebration of our marriage.
          </div>
          <div className='type-text'>
            However, if you'd still like to spoil us, please keep reading.
          </div>
          <div className='type-text'>
            We know that traditionally couples usually wish for items to help set up their new home
            together, but having lived under the same roof for about six years we already have what
            we need - and probably even more than we need!
          </div>
          <div className='type-text'>
            Our next goal is to buy a house of our own in the country with a little garden for our
            dog Lexie to play in. So, instead of asking for more stuff, we would be very grateful
            for any donations to our house fund.
          </div>
          <div className='type-text'>
            Donations can be made either directly to our bank account (please contact Matt or Elsa
            for our bank details) or via our
          </div>
          <a
            className='registry-button'
            href='https://prezola.com/wishlists/10274537/'
            target='_blank'
          >
            online registry
          </a>
        </div>
      </div>
    </div>
  );
};
