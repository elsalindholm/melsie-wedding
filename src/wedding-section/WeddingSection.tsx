import './wedding-section.scss';

import React from 'react';
import { AppState } from '../AppState';

interface WeddingSectionProps {
  appState: AppState;
}

export const WeddingSection: React.FC<WeddingSectionProps> = ({ appState }) => {
  return (
    <div id='wedding-anchor' className='wedding-section'>
      <div className='wedding-info-container'>
        <div className='text-container'>
          <div className='type-title'>Wedding</div>
          <div className='type-text'>
            We warmly welcome you to celebrate this important day with us.
          </div>
          <div className='type-text'>Our wedding will take place on</div>
          <div className='type-text'>
            Sunday the <span className='type-semibold'>5th of November 2023</span>
            <br />
            at <span className='type-semibold'>Ednam House Hotel</span> in Kelso, Scotland.
          </div>
          <div className='wedding-counter'>
            <div className='counter-section'>
              <div className='counter-number'>{appState.daysUntil}</div>
              <div className='counter-text'>days</div>
            </div>
            <div className='counter-section'>
              <div className='counter-number'>{appState.hoursUntil}</div>
              <div className='counter-text'>hours</div>
            </div>
            <div className='counter-section'>
              <div className='counter-number'>{appState.minutesUntil}</div>
              <div className='counter-text'>minutes</div>
            </div>
          </div>
        </div>
      </div>

      <div className='programme-container'>
        <div className='flex-column'>
          <div className='type-header'>Welcome drinks</div>
          <div className='type-text'>
            Saturday 4th November
            <br />
            Time TBC
          </div>
          <div className='type-text'>
            If you are arriving to the hotel/area the night before, you are very welcome to join us
            for a relaxed catch-up at Ednam House Hotel
          </div>
        </div>
        <div className='flex-column'>
          <div className='type-header'>Ceremony</div>
          <div className='type-text'>
            Sunday 5th November
            <br />
            1pm
          </div>

          <div className='timeline-cont'>
            <div className='timeline'></div>
          </div>

          <div className='type-header type-header-m10'>Drinks & photos</div>
          <div className='type-text'>Time TBC</div>
          <div className='type-text'>
            After the ceremony we will enjoy a glass of bubbly and take a few group photos
          </div>

          <div className='timeline-cont'>
            <div className='timeline'></div>
          </div>

          <div className='type-header type-header-m10'>Evening reception</div>
          <div className='type-text'>Time TBC</div>
          <div className='type-text'>
            We will sit down and enjoy a celebratory meal at the reception space
          </div>

          <div className='timeline-cont'>
            <div className='timeline'></div>
          </div>

          <div className='type-header type-header-m10'>Cèilidh</div>
          <div className='type-text'>Time TBC</div>
          <div className='type-text'>Then we continue to dance the night away</div>
        </div>
      </div>
    </div>
  );
};
