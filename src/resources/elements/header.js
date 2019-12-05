import { bindable, inject } from 'aurelia-framework';
import { baseUrl } from 'CONFIG';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Header {
  @bindable title;
  @bindable subtitle;

  constructor(eventAggregator) {
    this.ea = eventAggregator;
  }

  attached() {
    this.ea.subscribe('redirectToProducts', value => {
      window.location.href = `${baseUrl}/products`;
    });
    this.ea.subscribe('redirectToContact', value => {
      window.location.href = `${baseUrl}/contact`;
    });
  }
}
