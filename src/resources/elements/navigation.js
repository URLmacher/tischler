import { bindable } from 'aurelia-framework';

export class Navigation {
  @bindable mainLinks;
  @bindable navOpen;

  attached() {
    document.body.addEventListener('click', e => {
      if (!this.navbar.contains(e.target) && e.target !== this.openNavBtn)
        this.navOpen = false;
    });
  }

  openNav() {
    this.navOpen = !this.navOpen;
  }

  closeNav(e) {
    if (e.target === e.currentTarget) {
      this.navOpen = false;
    }
  }
}
