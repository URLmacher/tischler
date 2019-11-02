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
  }

  attached() {
    this.ea.subscribe(RouterEvent.Complete, event => {
      this.currentSiteTitle = event.instruction.config.title;
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
