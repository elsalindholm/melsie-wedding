import './dresscode-section.scss';

import React from 'react';

export const DresscodeSection: React.FC = () => {
  return (
    <div className='dresscode-section'>
      <div className='type-title'>Dresscode</div>
      <div className='type-text'>semi-formal</div>
      <div className='type-text'>
        We are passionate about sustainability and therefore if you already own clothing that you'd
        like to wear, please feel free to rewear it and feel no pressure to buy something new for
        the event. However, we won't judge if you decide to treat yourself to a new frock or a tie.
      </div>
      <div className='type-text'>Oh, and feel free to change into comfier shoes for the dance!</div>
    </div>
  );
};
