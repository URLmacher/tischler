import { baseUrl } from 'CONFIG';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Products {
  constructor(eventAggregator) {
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
}
