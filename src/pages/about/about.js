import SimpleBar from 'simplebar';
import { baseUrl } from 'CONFIG';

export class About {
  constructor() {
    this.getContent();
    this.area = 'about';
    this.newArticle = {
      titleFlag: true,
      title: '',
      textFlag: true,
      text: '',
      imgFlag: true,
      img: ''
    };
  }

  attached() {
    new SimpleBar(this.aboutElement, {
      forceVisible: true,
      autoHide: false
    });
  }

  async getContent() {
    const json = await fetch(`${baseUrl}/backend/content.php?area=about`);
    const data = await json.json();
    this.articles = data.content;
  }
}
