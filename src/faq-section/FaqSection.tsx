import './faq-section.scss';

import React from 'react';

export const FaqSection: React.FC = () => {
  return (
    <div id='faq-anchor' className='faq-section'>
      <div className='image-filter'></div>
      <div className='text-container'>
        <div className='type-title'>Frequently asked questions</div>
        <div className='type-header'>What's the dress code?</div>
        <div className='type-text type-semibold'>Mikä on juhlien pukukoodi?</div>
        <div className='type-text'>
          Semi-formal / <span className='type-translation no-margin'>Tumma puku</span>
        </div>
        <div className='type-text'>
          We are passionate about sustainability and therefore if you already own clothing that
          you'd like to wear, please feel free to rewear it and feel no pressure to buy something
          new for the event. However, we won't judge if you decide to treat yourself to a new frock
          or a tie.
        </div>
        <div className='type-text'>
          Oh, and feel free to change into comfier shoes for the dance!
        </div>
        <div className='type-header'>Are plus ones allowed?</div>
        <div className='type-text type-semibold'>Saanko tuoda juhliin avecin?</div>
        <div className='type-text'>
          Your invitation will have a (+1) symbol next to your name if a plus one is allowed.
        </div>
        <div className='type-translation'>
          Hääkutsussa nimenne vieressä on (+1), jos avec sallitaan.
        </div>
        <div className='type-header'>What kind of ceremony are you having?</div>
        <div className='type-text type-semibold'>Millainen hääseremonianne tulee olemaan?</div>
        <div className='type-text'>
          Our ceremony will be a civil ceremony conducted by a humanist celebrant. We'll try and
          keep it relatively short so that we can get the party started!
        </div>
        <div className='type-translation'>Hääseremoniamme tulee olemaan siviilivihkiminen.</div>
        <div className='type-header'>Are we allowed to take photos during the celebrations?</div>
        <div className='type-text type-semibold'>Voimmeko ottaa kuvia juhlien aikana?</div>
        <div className='type-text'>
          We kindly ask that you don't take photos during the wedding ceremony as we'd rather you
          get to enjoy the moment. We have hired a photographer to take wonderful photos of the day
          and we'd love to share the best ones with you after the wedding!
        </div>
        <div className='type-translation'>
          Pyydämme ystävällisesti, että vieraamme eivät kuvaa hääseremonian aikana. Mukana juhlissa
          tulee olemaan valokuvaaja, joka ikuistaa hetken ja jaamme parhaat otokset mielellämme
          teidän kanssanne häiden jälkeen.
        </div>
        <div className='type-header'>Who made the beautiful artwork on your website?</div>
        <div className='type-text type-semibold'>
          Kuka on tehnyt nettisivullanne olevan taiteen?
        </div>
        <div className='type-text'>
          The lovely floral artwork on this website was created by Matt's mum, Dawn. It perfectly
          encapsulates the theme for our wedding: The Winter Garden.
        </div>
        <div className='type-translation'>
          Nettisivumme taide on Mattin äidin Dawnin käsialaa. Hänen maalauksensa kuvastaa kauniisti
          häidemme teemaa: talvipuutarha.
        </div>
        <div className='type-header'>I have more questions! How can I contact you?</div>
        <div className='type-text type-semibold'>Miten voin ottaa teihin yhteyttä?</div>
        <div className='type-text'>You can reach us by email at elsaandmattwedding@gmail.com.</div>
        <div className='type-translation'>
          Voitte ottaa meihin yhteyttä sähköpostitse osoitteeseen elsaandmattwedding@gmail.com.
        </div>
      </div>
    </div>
  );
};
