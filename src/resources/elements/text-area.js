import { bindable } from 'aurelia-framework';
import { MDCTextField } from '@material/textfield';

export class TextArea {
  @bindable label;
  
  attached() {
    new MDCTextField(this.textAreaDom);
  }
}
