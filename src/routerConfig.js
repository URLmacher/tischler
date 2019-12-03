import { PLATFORM } from 'aurelia-framework';
export let routerConfig = [
  {
    route: ['', 'home'],
    name: 'home',
    moduleId: PLATFORM.moduleName('pages/home/home'),
    nav: true,
    main: true,
    title: 'Tischlerei Moser',
    navtitle: 'Home',
    subtitle: 'JEDES MÖBELSTÜCK IST FÜR UNS WIE EIN KUNSTSTÜCK'
  },
  {
    route: 'products',
    name: 'products',
    moduleId: PLATFORM.moduleName('pages/products/products'),
    nav: true,
    main: true,
    title: 'Leistungen',
    navtitle: 'Leistungen'
  },
  {
    route: 'about',
    name: 'about',
    moduleId: PLATFORM.moduleName('pages/about/about'),
    nav: true,
    main: true,
    title: 'Über uns',
    navtitle: 'Über uns'
  },
  {
    route: 'contact',
    name: 'contact',
    moduleId: PLATFORM.moduleName('pages/contact/contact'),
    nav: true,
    main: true,
    title: 'Kontakt',
    navtitle: 'Kontakt'
  },
  {
    route: 'impressum',
    name: 'impressum',
    moduleId: PLATFORM.moduleName('subpages/impressum'),
    nav: true,
    sub: true,
    title: 'Impressum',
    navtitle: 'Impressum'
  },
  {
    route: 'datenschutz',
    name: 'datenschutz',
    moduleId: PLATFORM.moduleName('subpages/datenschutz'),
    nav: true,
    sub: true,
    title: 'Datenschutz',
    navtitle: 'Datenschutz'
  },
  {
    route: 'anfahrt',
    name: 'anfahrt',
    moduleId: PLATFORM.moduleName('subpages/anfahrt'),
    nav: true,
    sub: true,
    title: 'Anfahrt',
    navtitle: 'Anfahrt'
  },
  {
    route: 'admin',
    name: 'admin',
    moduleId: PLATFORM.moduleName('pages/login/login'),
    nav: true,
    sub: true,
    title: 'Adminbereich'
  }
];
