import { baseUrl } from 'CONFIG';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Impressum {
  constructor(eventAggregator) {
    this.ea = eventAggregator;
    this.contactInfoTitle = 'Für den Inhalt verantwortlich:';
    this.area = 'impressum';
    this.getContent();
    this.newContactInfo = { text: '', textFlag: true };
  }
  attached() {
    this.ea.subscribe('contentChanged', value => {
      this.getContent();
    });
  }
  async getContent() {
    const json = await fetch(`${baseUrl}/backend/content.php?area=impressum`);
    const data = await json.json();
    this.contactInfos = data.content;
  }
}
