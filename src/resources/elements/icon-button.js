import { bindable } from 'aurelia-framework';
import { MDCRipple } from '@material/ripple';

export class IconButton {
  @bindable icon;

  attached() {
    new MDCRipple(document.querySelector('.mdc-fab'));
  }
}
