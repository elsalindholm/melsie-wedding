import './accommodation-section.scss';

import React from 'react';

export const AccommodationSection: React.FC = () => {
  return (
    <div className='accommodation-section'>
      <div className='type-title'>Accommodation</div>
      <div className='type-text'>
        Our venue has a good number of rooms available for those who wish to stay. The rooms are
        being held for our guests for a while and we encourage you to get in touch with the hotel as
        soon as possible to secure your room.
      </div>
      <div className='type-text'>
        You can call Ednam House Hotel 073072862807 to make your booking
      </div>
      <div className='type-text'>Please mention that it's for the Elsa & Matt wedding.</div>
      <div className='type-text'>Link to hotel</div>
      <div className='type-text'>Discount available??</div>
      <div className='type-text'>Please make sure you book your accommodation well in advance</div>

      <div className='type-header'>Other accommodation in Kelso</div>
      <div className='type-text'>
        if you cannot get a suitable room in Ednam House Hotel, not to worry, there are other
        options available in Kelso, within a couple of minutes' walk.
      </div>

      <div className='hotel-info-container'>
        <div className='type-text type-semibold'>Queen's Head Hotel</div>
        <div className='type-text'>1min walk from venue</div>
        <a href='http://queensheadhotelkelso.com/' target='_blank'>
          queensheadhotelkelso.com
        </a>
      </div>
      <div className='hotel-info-container'>
        <div className='type-text type-semibold'>Inglestone House</div>
        <div className='type-text'>3min walk from venue</div>
        <a href='https://www.inglestonehouse.co.uk/' target='_blank'>
          inglestonehouse.co.uk
        </a>
      </div>
      <div className='hotel-info-container'>
        <div className='type-text type-semibold'>Cross Keys Hotel</div>
        <div className='type-text'>3min walk from venue</div>
        <a href='https://www.cross-keys-hotel.co.uk/' target='_blank'>
          cross-keys-hotel.co.uk
        </a>
      </div>
      <div className='hotel-info-container'>
        <div className='type-text type-semibold'>The Old Priory</div>
        <div className='type-text'>4min walk from venue</div>
        <a href='http://theoldpriorykelso.com/' target='_blank'>
          theoldpriorykelso.com
        </a>
      </div>
      <div className='type-text'>If you are looking for self-catering options, please check</div>
      <div className='type-text'>
        AirBnB or Crabtree & Crabtree
        https://www.crabtreeandcrabtree.com/regions/scottish-borders/kelso-jedburgh-surrounding-area/
      </div>
    </div>
  );
};
