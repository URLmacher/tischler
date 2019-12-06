import { bindable, inject } from 'aurelia-framework';
import { baseUrl } from 'CONFIG';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Header {
  @bindable title;
  @bindable subtitle;
  firstLoad = false;

  constructor(eventAggregator) {
    this.ea = eventAggregator;
  }

  attached() {
    this.ea.subscribe('redirectToProducts', value => {
      window.location.href = `${baseUrl}/#/products`;
    });
    this.ea.subscribe('redirectToContact', value => {
      window.location.href = `${baseUrl}/#/contact`;
    });
    this.ea.subscribe('router:navigation:processing', value => {
      this.domheader.classList.remove('header__animate');
    });
    this.ea.subscribe('router:navigation:success', value => {
      this.domheader.classList.add('header__animate');
    });
  }
}
