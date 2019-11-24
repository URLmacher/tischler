import SimpleBar from 'simplebar';
import { baseUrl } from 'CONFIG';

export class Datenschutz {
  constructor() {
    this.getContent();
  }

  async getContent() {
    const json = await fetch(`${baseUrl}/backend/content.php?area=datenschutz`);
    const data = await json.json();
    this.articles = data.content;
  }

  attached() {
    new SimpleBar(this.datenschutzElement, {
      forceVisible: true,
      autoHide: false
    });
  }
}
