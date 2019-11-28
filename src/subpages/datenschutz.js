import SimpleBar from 'simplebar';
import { baseUrl } from 'CONFIG';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Datenschutz {
  constructor(eventAggregator) {
    this.ea = eventAggregator;
    this.getContent();
    this.area = 'datenschutz';
    this.newArticle = { text: '', textFlag: true, title: '', titleFlag: true };
  }

  async getContent() {
    const json = await fetch(`${baseUrl}/backend/content.php?area=datenschutz`);
    const data = await json.json();
    this.articles = data.content;
  }

  attached() {
    this.ea.subscribe('contentChanged', value => {
      this.getContent();
    });
    new SimpleBar(this.datenschutzElement, {
      forceVisible: true,
      autoHide: false
    });
  }
}
