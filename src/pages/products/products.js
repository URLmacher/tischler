import { baseUrl } from 'CONFIG';

export class Products {
  constructor() {
    this.getContent();
    this.area = 'products';
  }

  async getContent() {
    const json = await fetch(`${baseUrl}/backend/content.php?area=products`);
    const data = await json.json();
    this.products = data.content;
  }
}
