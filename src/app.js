import 'stylesheets/main.scss';
import { EventAggregator } from 'aurelia-event-aggregator';
import { routerConfig } from 'routerConfig.js';
import { RouterEvent } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { baseUrl } from 'CONFIG';

@autoinject
export class App {
  static inject = [EventAggregator];

  constructor(ea) {
    this.ea = ea;
    this.navOpen = false;
    this.loggedIn = true;
    this.sessionId = '';
    this.username = '';
    this.checkSess();
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
    config.map(routerConfig);
  }

  async checkSess() {
    const json = await fetch(`${baseUrl}/backend/session.php`);
    const data = await json.json();
    if (data.success) {
      this.loggedIn = true;
      this.username = data.username;
      this.sessionId = data.sessionId;
    }
  }
}
