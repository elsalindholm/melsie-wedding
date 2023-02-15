import './main-nav.scss';

import React, { CSSProperties } from 'react';
import BannerImage from '../../assets/SouthQueensferryTrees.jpg';
import { AppState } from '../AppState';
import { observer } from 'mobx-react-lite';

interface MainNavProps {
  appState: AppState;
}

export const MainNav: React.FC<MainNavProps> = observer(({ appState }) => {
  const burgerOpenClass = appState.mobileMenuOpen ? 'open' : 'closed';

  return (
    <div className='main-nav'>
      <div className='desktop-link-container'>
        <div className='nav-link type-text' onClick={() => appState.scrollTo('wedding-anchor')}>
          wedding
        </div>
        <div className='nav-link type-text' onClick={() => appState.scrollTo('location-anchor')}>
          location
        </div>
        <div
          className='nav-link type-text'
          onClick={() => appState.scrollTo('accommodation-anchor')}
        >
          accommodation
        </div>
        <div className='nav-link type-text' onClick={() => appState.scrollTo('menu-anchor')}>
          menu
        </div>
        <div className='nav-link type-text' onClick={() => appState.scrollTo('registry-anchor')}>
          registry
        </div>
        <div className='nav-link type-text' onClick={() => appState.scrollTo('rsvp-anchor')}>
          rsvp
        </div>
        <div className='nav-link type-text' onClick={() => appState.scrollTo('faq-anchor')}>
          faq
        </div>
      </div>

      <div className='mobile-link-container'>
        <button className='menu-button' onClick={appState.toggleBurgerMenu}>
          <div className='burger-slice'></div>
          <div className='burger-slice'></div>
          <div className='burger-slice'></div>
        </button>
        <div className={`dropdown-menu ${burgerOpenClass}`}>
          <div
            className='dropdown-link'
            onClick={() => appState.selectBurgerMenuItem('wedding-anchor')}
          >
            wedding
          </div>
          <div
            className='dropdown-link'
            onClick={() => appState.selectBurgerMenuItem('location-anchor')}
          >
            location
          </div>
          <div
            className='dropdown-link'
            onClick={() => appState.selectBurgerMenuItem('accommodation-anchor')}
          >
            accommodation
          </div>
          <div
            className='dropdown-link'
            onClick={() => appState.selectBurgerMenuItem('menu-anchor')}
          >
            menu
          </div>
          <div
            className='dropdown-link'
            onClick={() => appState.selectBurgerMenuItem('registry-anchor')}
          >
            registry
          </div>
          <div
            className='dropdown-link'
            onClick={() => appState.selectBurgerMenuItem('rsvp-anchor')}
          >
            rsvp
          </div>
          <div
            className='dropdown-link'
            onClick={() => appState.selectBurgerMenuItem('faq-anchor')}
          >
            faq
          </div>
        </div>
      </div>
    </div>
  );
});
