import './faq-section.scss';

import React from 'react';

export const FaqSection: React.FC = () => {
  return (
    <div id='faq-anchor' className='faq-section'>
      <div className='image-filter'></div>
      <div className='text-container'>
        <div className='type-title'>Frequently asked questions</div>
        <div className='type-header'>What's the dress code?</div>
        <div className='type-text'>Semi-formal</div>
        <div className='type-text'>
          We are passionate about sustainability and therefore if you already own clothing that
          you'd like to wear, please feel free to rewear it and feel no pressure to buy something
          new for the event. However, we won't judge if you decide to treat yourself to a new frock
          or a tie.
        </div>
        <div className='type-text'>
          Oh, and feel free to change into comfier shoes for the dance!
        </div>
        <div className='type-header'>What kind of ceremony are you having?</div>
        <div className='type-text'>
          Our ceremony will be a civil ceremony conducted by a humanist celebrant. We'll try and
          keep it relatively short so that we can get the party started!
        </div>
        <div className='type-header'>Are we allowed to take photos during the celebrations?</div>
        <div className='type-text'>
          We kindly ask that you don't take photos during the wedding ceremony as we'd rather see
          your faces than your phones. We have hired a photographer to take wonderful photos of the
          day and we'd love to share the best ones with you after the wedding!
        </div>
        <div className='type-header'>Who made the beautiful artwork on your website?</div>
        <div className='type-text'>
          The lovely floral artwork on this website was created by Matt's mum, Dawn. It perfectly
          encapsulates the theme for our wedding: The Winter Garden.
        </div>
        <div className='type-header'>I have more questions! How can I contact you?</div>
        <div className='type-text'>You can reach us by email at elsaandmattwedding@gmail.com.</div>
      </div>
    </div>
  );
};
