import { bindable } from 'aurelia-framework';
import { MDCTextField } from '@material/textfield';
import { MDCFloatingLabel } from '@material/floating-label';

export class InputPassword {
  @bindable value;
  @bindable error;
  @bindable errorText;

  constructor() {
    this.label = 'Password';
  }

  attached() {
    new MDCTextField(this.inputPasswordDom);
    new MDCFloatingLabel(this.labelDom);
  }

  resetErrors() {
    this.error = false;
  }
}
