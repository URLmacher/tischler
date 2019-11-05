import { bindable } from 'aurelia-framework';
import { containerless } from 'aurelia-framework';

@containerless()
export class ProductCard {
  @bindable title;
  @bindable img;
  @bindable bodytitle;
  @bindable bodytext;
}
