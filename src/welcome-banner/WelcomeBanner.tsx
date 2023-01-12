import './welcome-banner.scss';

import React from 'react';
import BannerImage from '../../assets/welcomeBannerBg.png';

export const WelcomeBanner: React.FC = () => {
  return (
    <div className='welcome-banner'>
      <img src={BannerImage} className='banner-background' />
      <div className='text-container'>
        <div className='type-text'>November 1, 2023</div>
        <div className='type-title'>Elsa & Matt</div>
        <div className='type-text'>Celebrate our big day with us</div>
      </div>
    </div>
  );
};
