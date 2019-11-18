import { bindable } from 'aurelia-framework';
import { MDCTextField } from '@material/textfield';

export class TextArea {
  @bindable value;
  @bindable error;
  @bindable errorText;

  constructor() {
    this.label = 'Nachricht';
  }

  attached() {
    new MDCTextField(this.textAreaDom);
  }

  resetErrors() {
    this.error = false;
  }
}
