import './rsvp-section.scss';

import React, { CSSProperties } from 'react';
import BgImage from '../../assets/CloseUpLeft.jpg';

export const RsvpSection: React.FC = () => {
  const props: CSSProperties = {
    backgroundImage: `url(${BgImage})`,
  };
  return (
    <div id='rsvp-anchor' className='rsvp-section'>
      <div className='image-container' style={props}></div>
      <div className='image-filter'></div>
      <div className='text-container'>
        <div className='type-title'>RSVP</div>
        <div className='type-text'>
          Deadline to respond has passed. Thank you for responding to our invitations!
        </div>
        <div className='type-text'>
          For those who have confirmed their attendance: if your circumstances change, please let us
          know as soon as possible via email to
        </div>
        <div className='type-text'>elsaandmattwedding@gmail.com</div>
      </div>
    </div>
  );
};
