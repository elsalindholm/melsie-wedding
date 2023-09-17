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
        <div className='type-title'>Wedding</div>
        <div className='type-text'>
          We're so excited to celebrate our wedding with you. Find all the details you need to know
          about our big day here.
        </div>
        <div className='type-text'>Our wedding will take place on</div>
        <div className='type-text'>
          Sunday the <span className='type-semibold'>5th of November 2023</span>
          <br />
          at <span className='type-semibold'>Ednam House Hotel</span> in Kelso, Scotland.
        </div>
        <div className='type-translation'>
          Olette lämpimästi tervetulleita häihimme, jotka pidetään sunnuntaina 5. marraskuuta 2023,
          Kelson kaupungissa, Skotlannissa. Hääpaikkanamme on Ednam House Hotel, Kelson keskustassa.
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
            for a relaxed catch-up at Ednam House Hotel.
          </div>
          <div className='type-translation'>
            Jos olette hotellilla/alueella jo häitä edeltävänä päivänä, olette lämpimästi
            tervetulleita vaihtamaan kuulumisia rennoissa merkeissä Ednam House Hotellilla.
          </div>
        </div>
        <div className='flex-column'>
          <div className='type-header'>Ceremony</div>
          <div className='type-text'>
            Sunday 5th November
            <br />
            1pm
          </div>
          <div className='type-text'>
            Our ceremony will take place in the Ednam Room, at Ednam House Hotel. Please arrive at
            least 30 minutes before.
          </div>
          <div className='type-translation'>
            Hääseremoniamme pidetään Ednam Roomissa, Ednam House Hotellissa. Pyydämme teitä
            ystävällisesti saapumaan hyvissäajoin, ainakin 30min ennen seremonian alkua.
          </div>
          <div className='timeline-cont'>
            <div className='timeline'></div>
          </div>

          <div className='type-header type-header-m10'>Drinks & photos</div>
          <div className='type-text'>1.30pm</div>
          <div className='type-text'>
            After the ceremony we will enjoy a glass of bubbly at the bar and take a few group
            photos.
          </div>
          <div className='type-translation'>
            Seremonian jälkeen nautimme lasin kuplivaa baarin puolella ja otamme muutamat ryhmäkuvat
            valokuvaajan kanssa.
          </div>

          <div className='timeline-cont'>
            <div className='timeline'></div>
          </div>

          <div className='type-header type-header-m10'>Speeches</div>
          <div className='type-text'>3.30pm</div>
          <div className='type-text'>
            We make our way back into the Ednam Room for the speeches.
          </div>
          <div className='type-translation'>Palaamme Ednam Roomiin kuuntelemaan puheita.</div>

          <div className='timeline-cont'>
            <div className='timeline'></div>
          </div>

          <div className='type-header type-header-m10'>Dinner</div>
          <div className='type-text'>4pm</div>
          <div className='type-text'>We enjoy a celebratory meal in Ednam Room.</div>
          <div className='type-translation'>Nautimme juhla-aterian.</div>

          <div className='timeline-cont'>
            <div className='timeline'></div>
          </div>

          <div className='type-header type-header-m10'>Mingle & freshen up</div>
          <div className='type-text'>6pm</div>
          <div className='type-text'>
            While our band is getting set up, take a moment to socialise, freshen up and get your
            dancing shoes on.
          </div>
          <div className='type-translation'>
            Bändin valmistellessa illan tanssia varten on aikaa seurustella ja käydä vaihtamassa
            tanssikengät jalkaan.
          </div>

          <div className='timeline-cont'>
            <div className='timeline'></div>
          </div>

          <div className='type-header type-header-m10'>Cèilidh</div>
          <div className='type-text'>7pm</div>
          <div className='type-text'>We dance the night away.</div>
          <div className='type-translation'>Jatkamme juhlaa tanssin merkeissä.</div>

          <div className='timeline-cont'>
            <div className='timeline'></div>
          </div>

          <div className='type-header type-header-m10'>Snacks</div>
          <div className='type-text'>9pm</div>
          <div className='type-text'>
            We take a short break to refuel with some snacks (not to worry - the dance will
            continue).
          </div>
          <div className='type-translation'>
            Otamme tauon pienen purtavan kera. Tanssi jatkuu tämän jälkeen!
          </div>

          <div className='timeline-cont'>
            <div className='timeline'></div>
          </div>

          <div className='type-header type-header-m10'>We say goodnight</div>
          <div className='type-text'>12am</div>
        </div>
      </div>
    </div>
  );
};
