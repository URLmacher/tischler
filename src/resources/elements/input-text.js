import { bindable } from 'aurelia-framework';
import { MDCTextField } from '@material/textfield';
import { MDCFloatingLabel } from '@material/floating-label';

export class InputText {
  @bindable value;
  @bindable error;
  @bindable errorText

  constructor() {
    this.label = 'Name';
  }

  attached() {
    new MDCTextField(this.inputTextDom);
    new MDCFloatingLabel(this.labelDom);
  }

  resetErrors() {
    this.error = false;
  }
}
