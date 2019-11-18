import { inject } from 'aurelia-framework';

@inject(Element)
export class ClickThroughCustomAttribute {
  constructor(element) {
    this.element = element;
    this.handler = event => this.value.dispatchEvent(event);
  }

  attached() {
    this.element.addEventListener('click', this.handler);
  }

  detached() {
    this.element.removeEventListener('click', this.handler);
  }
}
