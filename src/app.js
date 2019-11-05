import { PLATFORM } from 'aurelia-framework';
import 'stylesheets/main.scss';
import { EventAggregator } from 'aurelia-event-aggregator';
import { RouterEvent } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';

@autoinject
export class App {
  static inject = [EventAggregator];

  constructor(ea) {
    this.ea = ea;
    this.navOpen = false;
  }

  attached() {
    this.ea.subscribe(RouterEvent.Complete, event => {
      this.currentSiteTitle = event.instruction.config.title;
      this.currentSiteSubtitle = event.instruction.config.subtitle;
      this.navOpen = false;
    });
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Tischler';
    config.map([
      {
        route: ['', 'home'],
        name: 'home',
        moduleId: PLATFORM.moduleName('pages/home/home'),
        nav: true,
        title: 'Tischler',
        subtitle: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.'
      },
      {
        route: 'products',
        name: 'products',
        moduleId: PLATFORM.moduleName('pages/products/products'),
        nav: true,
        title: 'Leistungen'
      },
      {
        route: 'about',
        name: 'about',
        moduleId: PLATFORM.moduleName('pages/about/about'),
        nav: true,
        title: 'Über uns'
      },
      {
        route: 'contact',
        name: 'contact',
        moduleId: PLATFORM.moduleName('pages/contact/contact'),
        nav: true,
        title: 'Kontakt'
      }
    ]);
  }
}
