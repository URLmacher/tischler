import { PLATFORM } from 'aurelia-framework';
import 'stylesheets/main.scss';

export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Tischler';
    config.map([
      {
        route: ['', 'home'],
        name: 'home',
        moduleId: PLATFORM.moduleName('pages/home'),
        nav: true,
        title: 'Home'
      },
      {
        route: 'products',
        name: 'products',
        moduleId: PLATFORM.moduleName('pages/products'),
        nav: true,
        title: 'Leistungen'
      }
    ]);
  }
}
