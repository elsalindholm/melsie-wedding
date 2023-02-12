import { action, makeObservable, observable } from 'mobx';

export class AppState {
  mobileMenuOpen = false;
  daysUntil = 0;

  constructor() {
    makeObservable(this, {
      mobileMenuOpen: observable,
      toggleBurgerMenu: action,
      closeBurgerMenu: action,
    });

    window.addEventListener('pointerdown', this.onPointerDown);

    this.countdownTimer();
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

  private countdownTimer() {
    const today = new Date();
    const weddingDate = new Date(today.getFullYear(), 10, 5);

    const oneDay = 1000 * 60 * 60 * 24;

    const daysUntil = Math.ceil((weddingDate.getTime() - today.getTime()) / oneDay);

    this.daysUntil = daysUntil;
  }
}
