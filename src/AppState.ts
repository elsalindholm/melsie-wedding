import { action, makeObservable, observable } from 'mobx';

export class AppState {
  mobileMenuOpen = false;

  constructor() {
    makeObservable(this, {
      mobileMenuOpen: observable,
      toggleBurgerMenu: action,
      closeBurgerMenu: action,
    });

    window.addEventListener('pointerdown', this.onPointerDown);
  }

  selectBurgerMenuItem(scrollToId: string) {
    this.closeBurgerMenu();
    this.scrollTo(scrollToId);
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  toggleBurgerMenu = () => {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  };

  closeBurgerMenu() {
    this.mobileMenuOpen = false;
  }

  private readonly onPointerDown = (event: PointerEvent) => {
    // If didn't touch dropdown, close dropdown
    const elem = event.target as HTMLElement;

    if (!elem.classList.contains('dropdown-link')) {
      this.closeBurgerMenu();
    }
  };
}
