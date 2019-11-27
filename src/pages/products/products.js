import { baseUrl } from 'CONFIG';

export class Products {
  constructor() {
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

  async getContent() {
    const json = await fetch(`${baseUrl}/backend/content.php?area=products`);
    const data = await json.json();
    this.products = data.content;
  }
}
