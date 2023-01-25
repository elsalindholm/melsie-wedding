import './registry-section.scss';

import React, { CSSProperties } from 'react';
import BgImage from '../../assets/InchcolmBeach.jpg';

export const RegistrySection: React.FC = () => {
  const props: CSSProperties = {
    backgroundImage: `url(${BgImage})`,
  };

  return (
    <div className='registry-section'>
      <div className='image-container' style={props}></div>
      <div className='text-container'>
        <div className='background-filter'></div>
        <div>
          <div className='type-title'>Registry</div>
          <div className='type-text'>
            We require no gifts, your presence on our special day is enough for us.{' '}
          </div>
          <div className='type-text'>
            If you’d still like to give us a gift, you can find some suggestions below.{' '}
          </div>
          <div className='type-text'>
            If you’d still like to give us a gift, we would welcome a donation for our house pot. We
            have all the material things we need, but our next step is to invest in a place of our
            own
          </div>
        </div>
      </div>
    </div>
  );
};
