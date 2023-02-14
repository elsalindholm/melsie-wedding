import './welcome-banner.scss';

import React, { CSSProperties } from 'react';
import BannerImage from '../../assets/dryFlowerArtCropped.jpg';

export const WelcomeBanner: React.FC = () => {
  const props: CSSProperties = {
    backgroundImage: `url(${BannerImage})`,
  };

  return (
    <div className='welcome-banner'>
      <div className='image-container' style={props}></div>
      <div className='image-filter'></div>
      <div className='text-container'>
        <div className='type-text'>November 5, 2023</div>
        <div className='type-title'>Elsa & Matt</div>
        <div className='type-text'>Celebrate our big day with us</div>
      </div>
    </div>
  );
};
