import './rsvp-section.scss';

import React from 'react';

export const RsvpSection: React.FC = () => {
  return (
    <div className='rsvp-section'>
      <div className='type-title'>RSVP</div>
      <div className='type-text'>
        We kindly ask you to let us know whether you will be able to join our celebrations by the
        XX.XX.2023.
      </div>
      <div className='type-text'>When responding, please include the following information:</div>
      <ul>
        <li>who will be attending</li>
        <li>menu choices</li>
        <li>dietary requirements</li>
      </ul>
      <div className='type-text'>
        If you are attending with children, could you please let us know if you will require
      </div>
      <ul>
        <li>a highchair</li>
        <li></li>
      </ul>
    </div>
  );
};
