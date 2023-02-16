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
          We kindly ask you to let us know whether you will be able to join our celebrations by
          <br />
          <span className='type-semibold'>Monday the 4th of September 2023</span>.
        </div>
        <div className='type-text'>
          Please respond using the link below. We kindly ask each adult guest to fill in the form
          separately.
        </div>
        <a className='link-white' href='https://forms.gle/5fsYCDU5WkNMrmed9' target='_blank'>
          RESPOND HERE
        </a>
        <div className='type-text'>
          If you have any issues with the form, you can also rsvp via email to
          <br />
          elsaandmattwedding@gmail.com
          <br />
        </div>
        <div className='translation-container'>
          <div className='type-translation'>
            Pyydämme teitä ystävällisesti vastaamaan kutsuumme maanantai 4. syyskuuta 2023 mennessä.
            Voitte vastata alla olevan linkin kautta.
          </div>
          <a
            className='link-white translation-link'
            href='https://forms.gle/5fsYCDU5WkNMrmed9'
            target='_blank'
          >
            Vastaa täällä
          </a>
          <div className='type-translation'>
            Jos linkki ei jostain syystä toimi, voitte vastata sähköpostitse osoitteeseen
            elsaandmattwedding@gmail.com.
          </div>
        </div>
      </div>
    </div>
  );
};
