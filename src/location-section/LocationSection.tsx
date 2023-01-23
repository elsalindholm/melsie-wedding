import './location-section.scss';

import React from 'react';
import HotelImage from '../../assets/EdnamHouseHotel.jpg';

export const LocationSection: React.FC = () => {
  return (
    <div className='location-section'>
      <div className='type-title'>Location</div>

      <div className='flex-row'>
        <div className='img-container'>
          <img src={HotelImage} />
          <div className='img-filter'></div>
        </div>
        <div className='location-blurb flex-column'>
          <div className='type-text'>Our wedding will be held at</div>
          <div className='type-text'>
            Ednam House Hotel
            <br />
            12 Whatever Road
            <br />
            Kelso
            <br />
            AB1 CD2
            <br />
            Scotland, UK
          </div>
          <div className='type-text'>
            The Georgian country house is located in the market town of Kelso in the heart of the
            Scottish Borders on the bank of River Tweed.
          </div>
        </div>
      </div>

      <div className='type-title'>How to get there</div>
      <div className='type-header'>By car</div>
      <div className='type-text'>
        Our venue is located in the heart of the Borders town Kelso. Google maps will direct you to
        the correct place. There's free parking available at the venue. Alternatively, if there is
        no space at the hotel parking lot, you can park at{' '}
      </div>

      <div className='type-header'>By public transport</div>
      <div className='type-text type-semibold'>From Edinburgh:</div>
      <div className='type-text'>Take a train from Edinburgh Waverley to Tweedbank station.</div>
      <div className='type-text'>
        From Tweedbank station, hop onto the bus no. 67 towards Berwick-upon-Tweed. Get off at the
        Woodmarket stop in Kelso. Buses run once every hour and travel time to Kelso is roughly
        50mins.
      </div>
      <div className='type-text type-semibold'>From Glasgow:</div>
      <div className='type-text'>
        Take a train from Glasgow Queen Street to Edinburgh Waverley. From there follow travel
        instructions from Edinburgh (above).
      </div>
      <div className='type-text type-semibold'>From Berwick-upon-Tweed:</div>
      <div className='type-text'>
        You can get to Kelso from Berwick-upon-Tweed on bus no. 67, which runs once an hour.
      </div>

      <div className='type-header'>Guests travelling from abroad</div>
      <div className='type-text'>
        Edinburgh airport is the closest airport to the venue. From there the simplest way is to
        take a tram into Edinburgh city centre, train from Waverley station to Tweedbank and a bus
        from Tweedbank to Kelso.
      </div>
      <div className='type-text'>
        If you need toilet facilities during your journey, Edinburgh Waverley has a public toilet
        (which costs maybe 20p?), the Tweedbank train has a toilet and there are toilets available
        at Tweedbank station during the station cafe opening hours.
      </div>
      <div className='type-text'>
        Please contact Elsa & Matt prior to the big day if you require further advice on how to get
        to the venue.
      </div>
    </div>
  );
};
