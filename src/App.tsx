import './app.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppState } from './AppState';
import { WelcomeBanner } from './welcome-banner/WelcomeBanner';
import { WeddingSection } from './wedding-section/WeddingSection';
import { LocationSection } from './location-section/LocationSection';
import { AccommodationSection } from './accommodation-section/AccommodationSection';
import { DresscodeSection } from './dresscode-section/DresscodeSection';
import { RegistrySection } from './registry-section/RegistrySection';
import { MenuSection } from './menu-section/MenuSection';
import { RsvpSection } from './rsvp-section/RsvpSection';
import { HowToGetThereSection } from './how-to-get-there-section/HowToGetThereSection';
import { MainNav } from './main-nav/MainNav';

interface AppProps {
  appState: AppState;
}

export const App: React.FC<AppProps> = observer(({ appState }) => {
  return (
    <div className='app'>
      <WelcomeBanner />
      <MainNav appState={appState} />
      <WeddingSection appState={appState} />
      <LocationSection />
      <HowToGetThereSection />
      <AccommodationSection />
      <MenuSection />
      <DresscodeSection />
      <RegistrySection />
      <RsvpSection />
    </div>
  );
});
