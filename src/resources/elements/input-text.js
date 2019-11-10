import { bindable } from 'aurelia-framework';
import { MDCTextField } from '@material/textfield';
import { MDCFloatingLabel } from '@material/floating-label';

export class InputText {
  @bindable label;

  attached() {
    new MDCTextField(this.inputTextDom);
    new MDCFloatingLabel(this.labelDom);
  }
}
