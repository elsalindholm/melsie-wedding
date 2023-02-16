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
    <div id='accommodation-anchor' className='accommodation-section'>
      <div className='type-title'>Accommodation</div>
      <div className='type-header'>Ednam House Hotel</div>
      <div className='type-text'>
        Our venue has rooms available for those who wish to stay. The rooms are currently being held
        for our guests and we encourage you to get in touch with the hotel as soon as possible to
        secure your room.
      </div>
      <div className='type-text'>
        Please visit{' '}
        <a href='https://www.ednamhouse.com/' target='_blank'>
          ednamhouse.com
        </a>{' '}
        for more information about our venue.
      </div>
      <div className='type-text'>
        The room rate for our guests is £132/night. If you need an extra bed/cot in the room, please
        ask the hotel when booking.
      </div>
      <div className='type-text'>To secure a room, please call Ednam House Hotel</div>
      <div className='type-text type-semibold'>01573 224168</div>
      <div className='type-text'>
        When booking a room, please mention that it's for Elsa & Matt's wedding on the 5th November.
      </div>
      <div className='type-translation'>
        Hääpaikkamme{' '}
        <a href='https://www.ednamhouse.com/' target='_blank'>
          Ednam House Hotel
        </a>{' '}
        pitää huoneita toistaiseksi vieraitamme varten. Kahden hengen huoneen hinta on £132/yö. Jos
        haluatte huoneen hotellistamme, suosittelemme varaamaan huoneen mahdollisimman pian
        soittamalla suoraan hotellille.
      </div>
      <div className='type-translation'>Hotellin puh. +441573 224168</div>
      <div className='type-translation'>
        Huonetta varatessanne, mainitsettehan, että kyseessä ovat Elsan ja Mattin häät. Teiltä ei
        tulla ottamaan maksua huonetta varatessanne. Maksu otetaan yleensä 24 tuntia ennen varauksen
        alkua. Lisätietoa tästä saatte hotellilta.
      </div>

      <div className='type-header'>Other accommodation in Kelso</div>
      <div className='type-text'>
        If you cannot get a suitable room in Ednam House Hotel, not to worry, there are other
        options available in Kelso within a couple of minutes' walk.
      </div>
      <div className='type-translation'>
        Jos hotellistamme ei löydy teille sopivaa huonetta, lähistöltä löytyy muitakin
        majoitusvaihtoehtoja. Alla linkit muutamaan hotellivaihtoehtoon ja self-catering asuntoon.
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
        If you are looking for self-catering options, we recommend starting by checking
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
