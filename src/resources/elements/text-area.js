import { bindable } from 'aurelia-framework';
import { MDCTextField } from '@material/textfield';

export class TextArea {
  @bindable value;
  @bindable label;
  @bindable error;
  @bindable errorText;
  @bindable prefilled 

  attached() {
    new MDCTextField(this.textAreaDom);
  }

  resetErrors() {
    this.error = false;
  }
}
