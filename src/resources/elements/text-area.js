import { bindable } from 'aurelia-framework';
import { MDCTextField } from '@material/textfield';

export class TextArea {
  @bindable value;

  constructor() {
    this.label = 'Nachricht';
  }

  attached() {
    new MDCTextField(this.textAreaDom);
  }
}
