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
          separately. We also ask that you choose your menu options and inform us about any dietary
          requirements you have.
        </div>
        <div className='button-container'>
          <a className='rsvp-button' href='https://forms.gle/5fsYCDU5WkNMrmed9' target='_blank'>
            Respond here
          </a>
          <a className='rsvp-button' href='https://forms.gle/q1oSbpG9YDZHUi649' target='_blank'>
            Choose your menu here
          </a>
        </div>
        <div className='type-text'>
          If you have any issues with the form, you can also rsvp via email to
          <br />
          elsaandmattwedding@gmail.com
          <br />
        </div>
        <div className='translation-container'>
          <div className='type-translation'>
            Pyydämme teitä ystävällisesti vastaamaan kutsuumme maanantai 4. syyskuuta 2023 mennessä.
            Pyydämme teitä myös valitsemaan toivomasi ateriavahtoehdot ja ilmoittamaan meille
            erityisruokavalioista. Voitte vastata ja valita ruokalajit alla olevien linkkien kautta.
          </div>
          <div className='button-container'>
            <a className='rsvp-button' href='https://forms.gle/5fsYCDU5WkNMrmed9' target='_blank'>
              Vastaa kutsuun täällä
            </a>
            <a className='rsvp-button' href='https://forms.gle/q1oSbpG9YDZHUi649' target='_blank'>
              Valitse juhla-aterian ruokalajit
            </a>
          </div>
          <div className='type-translation'>
            Jos linkki ei jostain syystä toimi, voitte vastata sähköpostitse osoitteeseen
            elsaandmattwedding@gmail.com.
          </div>
        </div>
      </div>
    </div>
  );
};
