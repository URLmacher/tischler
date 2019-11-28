import { baseUrl } from 'CONFIG';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Products {
  constructor(eventAggregator) {
    this.slice = 3;
    this.lastPage = false;
    this.firstPage = true;
    this.iconNext = 'right';
    this.ea = eventAggregator;
    this.getContent();
    this.area = 'products';
    this.newProduct = {
      body_text: '',
      body_textFlag: true,
      body_title: '',
      body_titleFlag: true,
      img: '',
      imgFlag: true,
      title: '',
      titleFlag: true
    };
  }

  attached() {
    this.ea.subscribe('contentChanged', value => {
      this.getContent();
    });
  }

  async getContent() {
    const json = await fetch(`${baseUrl}/backend/content.php?area=products`);
    const data = await json.json();
    this.products = data.content;
  }

  next() {
    this.slice += 3;
    this.firstPage = false;
    if (this.products.length < 3 + this.slice) {
      this.lastPage = true;
    }
  }

  prev() {
    this.slice -= 3;
    this.lastPage = false;
    if (this.slice == 3) {
      this.firstPage = true;
    }
  }
}
