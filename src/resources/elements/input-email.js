import { bindable } from 'aurelia-framework';
import { MDCTextField } from '@material/textfield';
import { MDCFloatingLabel } from '@material/floating-label';

export class InputEmail {
  @bindable value;
  @bindable error;
  @bindable errorText;

  constructor() {
    this.label = 'Email';
  }

  attached() {
    new MDCTextField(this.inputEmailDom);
    new MDCFloatingLabel(this.labelDom);
  }

  resetErrors() {
    this.error = false;
  }
}
