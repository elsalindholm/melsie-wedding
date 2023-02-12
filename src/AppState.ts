import { action, makeObservable, observable } from 'mobx';

export class AppState {
  mobileMenuOpen = false;

  constructor() {
    makeObservable(this, {
      mobileMenuOpen: observable,
      toggleBurgerMenu: action,
    });
  }

  selectBurgerMenuItem(scrollToId: string) {
    this.toggleBurgerMenu();
    this.scrollTo(scrollToId);
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  toggleBurgerMenu = () => {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  };
}
