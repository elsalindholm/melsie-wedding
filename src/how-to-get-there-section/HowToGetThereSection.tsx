import './how-to-get-there-section.scss';

import React from 'react';

export const HowToGetThereSection: React.FC = () => {
  return (
    <div className='how-to-get-there-section'>
      <div className='type-title'>How to get there</div>
      <div className='type-header'>By car</div>
      <div className='type-text'>
        Our venue is located in the heart of the Borders town Kelso. Google maps will direct you to
        the correct place. There's free parking available at the venue.If the hotel car park is
        full, there's a free car park nearby called the Knowes Car Park (max.stay 60h - checked in
        Feb 2023).
      </div>
      <div className='type-translation'>
        Hääpaikkamme sijaitsee Kelson keskustassa. Google Maps -sovellus ohjeistaa teidät oikeaan
        paikkaan. Parkkeeraus hotellin parkkipaikalla on ilmaista. Jos hotellin parkkipaikka on
        täynnä, läheltä löytyy ilmainen parkkialue: the Knowes Car Park (max. 60h kerrallaan).
      </div>

      <div className='type-header'>By public transport</div>
      <div className='type-text type-semibold'>From Edinburgh:</div>
      <div className='type-text'>
        Take a train from Edinburgh Waverley to Tweedbank station. Travel time roughly an hour.
      </div>
      <div className='type-text'>
        From Tweedbank station, hop onto the bus no. 67* towards Berwick-upon-Tweed. Get off at the
        Woodmarket stop in Kelso. Buses run once every hour and travel time to Kelso is roughly
        50mins.
      </div>
      <div className='type-translation'>
        Edinburgh Waverley juna-asemalta matkusta junalla Tweedbankin asemalle (n. 1h). Tweedbankin
        asemalta hyppää bussiin numero 67*, joka on menossa Berwick-upon-Tweedin suuntaan. Jää
        bussista pois Kelson Woodmarket pysäkillä. Bussit kulkevat kerran tunnissa ja matka-aika
        bussilla on n.50min.
      </div>
      <div className='type-text type-semibold'>From Glasgow:</div>
      <div className='type-text'>
        Take a train from Glasgow Queen Street to Edinburgh Waverley. From there follow travel
        instructions from Edinburgh (above).
      </div>
      <div className='type-text type-semibold'>From Berwick-upon-Tweed:</div>
      <div className='type-text'>
        You can get to Kelso from Berwick-upon-Tweed on bus no. 67*, which runs once an hour.
      </div>

      <div className='additional-info'>
        <span className='type-text'>
          * Operated by{' '}
          <a className='type-black' href='https://www.bordersbuses.co.uk/' target='_blank'>
            Borders Buses
          </a>{' '}
          and accepts contactless payments.
        </span>
        <br />
        <span className='type-translation'>
          *
          <a className='type-black' href='https://www.bordersbuses.co.uk/' target='_blank'>
            Borders Buses:in
          </a>{' '}
          busseissa voi maksaa lähimaksulla.
        </span>
      </div>

      <div className='type-header'>Guests travelling from abroad</div>
      <div className='type-text'>
        Edinburgh airport is the closest airport to the venue. From there the simplest way is to
        take a tram into Edinburgh city centre, train from Waverley station to Tweedbank and a bus
        from Tweedbank to Kelso.
      </div>
      <div className='type-text'>
        Please contact Elsa & Matt prior to the big day if you require further advice on how to get
        to the venue.
      </div>
      <div className='type-header'>Suomesta matkustaville</div>
      <div className='type-translation'>
        Edinburghin lentokenttä on lähimpänä hääpaikkaa. Finnair lentää Helsingistä Edinburghiin n.
        kerran päivässä su-to (suoria lentoja ei ole pe-la). Edinburghiin lentää välilaskulla esim.
        KLM monta kertaa päivässä.
      </div>
      <div className='type-translation'>
        Jos tarvitsette apua matkan suunnittelemisessa, otattehan Elsaan yhteyttä hyvissäajoin ennen
        matkaa.
      </div>
    </div>
  );
};
