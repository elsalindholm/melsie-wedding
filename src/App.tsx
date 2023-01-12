import './app.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';

import { AppState } from './AppState';
import { WelcomeBanner } from './welcome-banner/WelcomeBanner';
import { MainNav } from './main-nav/MainNav';
import { WeddingSection } from './wedding-section/WeddingSection';

interface AppProps {
  appState: AppState;
}

export const App: React.FC<AppProps> = observer(({ appState }) => {
  return (
    <div className='app'>
      <WelcomeBanner />
      <MainNav />
      <WeddingSection />
    </div>
  );
});
