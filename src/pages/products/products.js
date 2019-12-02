import { baseUrl } from 'CONFIG';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { PLATFORM } from 'aurelia-pal';

@inject(EventAggregator)
export class Products {
  constructor(eventAggregator) {
    this.cardCount = { start: 0, width: 3, offset: 3 };
    this.lastPage = false;
    this.firstPage = true;
    this.outputArr = [];
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
    this.resizeEventHandler();
    this.ea.subscribe('contentChanged', value => {
      this.getContent();
    });

    PLATFORM.global.addEventListener('resize', () => {
      this.resizeEventHandler();
    });
  }

  resizeEventHandler() {
    const w = window.innerWidth;
    if (w < 1200) {
      this.cardCount.width = 1;
      this.cardCount.offset = 1;
      this.cardCount.start = 0;
    } else if (w > 1200 && w < 1600) {
      this.cardCount.width = 2;
      this.cardCount.offset = 2;
      this.cardCount.start = 0;
    } else if (w > 1600) {
      this.cardCount.width = 3;
      this.cardCount.offset = 3;
      this.cardCount.start = 0;
    }
    this.firstPage = true;
    this.lastPage = false;
    this.outputArr = this.sliceArray(
      this.cardCount.start,
      this.cardCount.width,
      this.products
    );
  }

  async getContent() {
    const json = await fetch(`${baseUrl}/backend/content.php?area=products`);
    const data = await json.json();
    this.products = data.content;
    this.outputArr = this.sliceArray(
      this.cardCount.start,
      this.cardCount.width,
      this.products
    );
    this.resizeEventHandler();
  }

  sliceArray(start, width, array) {
    return array.slice(start, width);
  }

  next() {
    this.cardCount.start += this.cardCount.width;
    this.cardCount.offset += this.cardCount.width;
    if (this.products.length < this.cardCount.width + this.cardCount.offset) {
      this.lastPage = true;
    }
    this.firstPage = false;
    this.outputArr = this.sliceArray(
      this.cardCount.start,
      this.cardCount.offset,
      this.products
    );
  }

  prev() {
    this.cardCount.start -= this.cardCount.width;
    this.cardCount.offset -= this.cardCount.width;
    if (this.cardCount.width === this.cardCount.offset) {
      this.firstPage = true;
    }
    this.lastPage = false;
    this.outputArr = this.sliceArray(
      this.cardCount.start,
      this.cardCount.offset,
      this.products
    );
  }
}
