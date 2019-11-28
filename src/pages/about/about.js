import SimpleBar from 'simplebar';
import { baseUrl } from 'CONFIG';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class About {
  constructor(eventAggregator) {
    this.ea = eventAggregator;
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
    this.ea.subscribe('contentChanged', value => {
      this.getContent();
    });
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
