import { bindable } from 'aurelia-framework';
import { MDCTextField } from '@material/textfield';
import { MDCFloatingLabel } from '@material/floating-label';

export class InputText {
  @bindable value;
  @bindable label;
  @bindable error;
  @bindable errorText;

  attached() {
    new MDCTextField(this.inputTextDom);
    const label = new MDCFloatingLabel(this.labelDom);
    // label.floatLabel(true);
  }

  resetErrors() {
    this.error = false;
  }
}
