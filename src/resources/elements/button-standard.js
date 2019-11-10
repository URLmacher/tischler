import {bindable} from 'aurelia-framework';
import { MDCRipple } from '@material/ripple';

export class ButtonStandard {
  @bindable text;

  attached() {
    new MDCRipple(this.buttonDom);
  }
}
