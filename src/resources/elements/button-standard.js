import { bindable, containerless } from 'aurelia-framework';
import { MDCRipple } from '@material/ripple';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@containerless()
@inject(EventAggregator)
export class ButtonStandard {
  @bindable text;
  @bindable event;

  constructor(eventAggregator) {
    this.ea = eventAggregator;
    this.event = false;
  }

  attached() {
    new MDCRipple(this.buttonDom);
  }

  formSubmit() {
    if (this.event) {
      this.ea.publish(this.event, 'submit');
    }
  }
}
