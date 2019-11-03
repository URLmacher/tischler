import { bindable } from 'aurelia-framework';

export class Navigation {
  @bindable mainLinks;

  constructor() {
    this.navOpen = false;
    this.subLinks = ['Impressum', 'Anfahrt', 'Datenschutz', 'AGB'];
  }

  openNav() {
    this.navOpen = !this.navOpen;
  }
}
