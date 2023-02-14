import './rsvp-section.scss';

import React from 'react';

export const RsvpSection: React.FC = () => {
  return (
    <div id='rsvp-anchor' className='rsvp-section'>
      <div className='type-title'>RSVP</div>
      <div className='type-text'>
        We kindly ask you to let us know whether you will be able to join our celebrations by
        <br />
        <span className='type-semibold'>Monday the 4th of September 2023</span>.
      </div>
      <div className='type-text'>
        Please respond using the link below. We kindly ask each adult guest to fill in the form
        separately.
      </div>
      <a>Respond here</a>
      <div className='type-text'>
        If you have any issues with the form, you can also rsvp via email to
        <br />
        elsaandmattwedding@gmail.com
        <br />
      </div>
    </div>
  );
};
