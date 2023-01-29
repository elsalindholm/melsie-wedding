import './wedding-section.scss';

import React, { CSSProperties } from 'react';
import FlowerImage from '../../assets/FrostyFlower.jpg';
import RingImage from '../../assets/EngagementRing.jpg';

export const WeddingSection: React.FC = () => {
  const propsFlower: CSSProperties = {
    backgroundImage: `url(${FlowerImage})`,
  };

  return (
    <div className='wedding-section'>
      <div className='wedding-info-container'>
        <div className='image-container'>
          <div className='flower-img' style={propsFlower}></div>
        </div>
        <div className='text-container'>
          <div className='type-title'>Wedding</div>
          <div className='type-text'>
            Our wedding will take place
            <br />
            on the 25th November 2023
          </div>
          <div className='type-text'>
            in Ednam House Hotel
            <br />
            in Kelso, Scotland.
          </div>
        </div>
      </div>

      <div className='type-header'>Welcome drinks</div>
      <div className='type-text'>
        Friday 24th November
        <br />
        Time TBC
      </div>
      <div className='type-text'>
        If you are arriving to the hotel/area the night before, you are very welcome to join us for
        a relaxed catch-up in
      </div>
      <div className='type-text'>Ednam House Hotel</div>

      <div className='type-header'>Ceremony</div>
      <div className='type-text'>
        Saturday 25th November
        <br />
        1pm
      </div>
      <div className='type-text'>
        Please arrive promptly so that you have time to find your seat before the ceremony begins at
        1.30pm
      </div>

      <div className='timeline-cont'>
        <div className='timeline'></div>
      </div>

      <div className='type-header type-header-m10'>Drinks & photos</div>
      <div className='type-text'>2.30pm</div>
      <div className='type-text'>
        After the ceremony we will enjoy a glass of bubbly and take a few group photos
      </div>

      <div className='timeline-cont'>
        <div className='timeline'></div>
      </div>

      <div className='type-header type-header-m10'>Evening reception</div>
      <div className='type-text'>3.30pm</div>
      <div className='type-text'>
        We will sit down and enjoy a celebratory meal at the reception space
      </div>

      <div className='timeline-cont'>
        <div className='timeline'></div>
      </div>

      <div className='type-header type-header-m10'>Cèilidh</div>
      <div className='type-text'>6.30pm - 11pm</div>
      <div className='type-text'>Then we continue to dance the night away</div>
    </div>
  );
};
