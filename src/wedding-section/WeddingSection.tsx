import './wedding-section.scss';

import React from 'react';

export const WeddingSection: React.FC = () => {
  return (
    <div className='wedding-section'>
      <div className='type-title'>Wedding</div>

      <div className='type-text'>
        Our wedding will take place
        <br />
        on the 1st November 2023
      </div>
      <div className='type-text'>
        at Inglewood House Hotel & Spa
        <br />
        in Alloa, Scotland
      </div>

      <hr />

      <div className='type-header'>Welcome drinks</div>
      <div className='type-text'>
        Wednesday 31st October
        <br />
        6pm - 8pm
      </div>
      <div className='type-text'>
        If you are arriving to the hotel/area the night before, please join us for welcome drinks
        and a catch-up in the
      </div>
      <div className='type-text'>Inglewood House Hotel bar</div>

      <div className='type-header'>Ceremony</div>
      <div className='type-text'>
        Thursday 1st November
        <br />
        1pm
      </div>
      <div className='type-text'>
        Please arrive promptly so that you have time to find your seat before the ceremony begins at
        1.30pm
      </div>

      <div className='type-header'>Drinks & photos</div>
      <div className='type-text'>2.30pm</div>
      <div className='type-text'>
        After the ceremony we will enjoy a glass of bubbly and take a few group photos
      </div>

      <div className='type-header'>Evening reception</div>
      <div className='type-text'>3.30pm</div>
      <div className='type-text'>
        We will sit down and enjoy a celebratory meal at the reception space
      </div>

      <div className='type-header'>Ceilidh</div>
      <div className='type-text'>6.30pm - 11pm</div>
      <div className='type-text'>Then we continue to dance the night away</div>
    </div>
  );
};
