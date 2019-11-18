import { bindable, containerless } from 'aurelia-framework';
import { MDCRipple } from '@material/ripple';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@containerless()
@inject(EventAggregator)
export class ButtonStandard {
  @bindable text;

  constructor(eventAggregator) {
    this.ea = eventAggregator;
  }

  attached() {
    new MDCRipple(this.buttonDom);
  }

  formSubmit() {
    this.ea.publish('form-submitted', 'submit');
  }
}
