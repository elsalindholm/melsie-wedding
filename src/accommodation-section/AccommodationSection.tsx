import './accommodation-section.scss';

import React, { CSSProperties } from 'react';

import InglestoneHouseImg from '../../assets/InglestoneHouse.jpg';
import QueensHeadHotelImg from '../../assets/QueensHeadHotel.jpg';
import CrossKeysHotelImg from '../../assets/CrossKeysHotel.jpg';
import OldPrioryImg from '../../assets/OldPriory.jpg';

export const AccommodationSection: React.FC = () => {
  const Inglestone: CSSProperties = {
    backgroundImage: `url(${InglestoneHouseImg})`,
  };
  const QueensHead: CSSProperties = {
    backgroundImage: `url(${QueensHeadHotelImg})`,
  };
  const CrossKeys: CSSProperties = {
    backgroundImage: `url(${CrossKeysHotelImg})`,
  };
  const OldPriory: CSSProperties = {
    backgroundImage: `url(${OldPrioryImg})`,
  };

  return (
    <div className='accommodation-section'>
      <div className='type-title'>Accommodation</div>
      <div className='type-header'>Ednam House Hotel</div>
      <div className='type-text'>
        Our venue has a good number of rooms available for those who wish to stay. The rooms are
        being held for our guests for a while and we encourage you to get in touch with the hotel as
        soon as possible to secure your room.
      </div>
      <div className='type-text'>
        Please visit <a href='https://www.ednamhouse.com/'>Ednamhouse.com</a> for more information
        on our venue.
      </div>
      <div className='type-text'>
        You can call Ednam House Hotel 01573 224168 to make your booking
      </div>
      <div className='type-text'>Please mention that it's for the Elsa & Matt wedding.</div>

      <div className='type-text'>Discount available??</div>
      <div className='type-text'>Please make sure you book your accommodation well in advance</div>

      <div className='type-header'>Other accommodation in Kelso</div>
      <div className='type-text'>
        If you cannot get a suitable room in Ednam House Hotel, not to worry, there are other
        options available in Kelso, within a couple of minutes' walk.
      </div>
      <div className='type-header'>Hotels</div>
      <div className='hotel-list'>
        <div className='hotel-info-container'>
          <div className='hotel-info-header'>Queen's Head Hotel</div>
          <div className='type-text'>1min walk from venue</div>
          <div className='img-container' style={QueensHead}></div>
          <a href='http://queensheadhotelkelso.com/' target='_blank'>
            queensheadhotelkelso.com
          </a>
        </div>
        <div className='hotel-info-container'>
          <div className='hotel-info-header'>Inglestone House</div>
          <div className='type-text'>3min walk from venue</div>
          <div className='img-container' style={Inglestone}></div>
          <a href='https://www.inglestonehouse.co.uk/' target='_blank'>
            inglestonehouse.co.uk
          </a>
        </div>
        <div className='hotel-info-container'>
          <div className='hotel-info-header'>Cross Keys Hotel</div>
          <div className='type-text'>3min walk from venue</div>
          <div className='img-container' style={CrossKeys}></div>
          <a href='https://www.cross-keys-hotel.co.uk/' target='_blank'>
            cross-keys-hotel.co.uk
          </a>
        </div>
        <div className='hotel-info-container'>
          <div className='hotel-info-header'>The Old Priory</div>
          <div className='type-text'>4min walk from venue</div>
          <div className='img-container' style={OldPriory}></div>
          <a href='http://theoldpriorykelso.com/' target='_blank'>
            theoldpriorykelso.com
          </a>
        </div>
      </div>
      <div className='type-header'>Self-catering</div>
      <div className='type-text'>
        If you are looking for self-catering options, we recommend checking
      </div>
      <div className='type-text'>
        <a href='https://www.airbnb.co.uk/' target='_blank'>
          AirBnB
        </a>
        <br />
        or
        <br />
        <a
          href='https://www.crabtreeandcrabtree.com/regions/scottish-borders/kelso-jedburgh-surrounding-area/'
          target='_blank'
        >
          Crabtree & Crabtree
        </a>
      </div>
    </div>
  );
};
