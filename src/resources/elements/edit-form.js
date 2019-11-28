import { bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { HttpClient } from 'aurelia-fetch-client';
import { baseUrl } from 'CONFIG';

@inject(EventAggregator)
export class EditForm {
  @bindable contents;
  @bindable area;
  formOpen = false;

  constructor(eventAggregator) {
    this.ea = eventAggregator;
    this.labelsPrefilled = true;
    this.confirmMsg = false;
    this.sessionId = false;
    this.labelTypes = {
      img: 'Bild URL',
      title: 'Titel',
      text: 'Text',
      bodytitle: 'Body Titel',
      bodytext: 'Text'
    };
  }

  attached() {
    this.ea.subscribe('openForm', value => {
      this.formOpen = true;
    });
    this.ea.subscribe('closeForm', value => {
      this.confirmMsg = false;
      this.formOpen = false;
    });
    this.ea.subscribe('saveForm', value => {
      this.sessionId = value;
      this.saveForm();
    });
  }

  saveForm() {
    if (!this.sessionId) return;

    let postData = {
      content: this.contents,
      area: this.area,
      id: this.sessionId
    };
    let httpClient = new HttpClient();

    httpClient
      .fetch(`${baseUrl}/backend/update.php`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(postData)
      })
      .then(result => {
        return result.json();
      })
      .then(data => {
        if (data.success) {
          this.ea.publish('contentChanged', '');
          this.confirmMsg = 'Einträge gespeichert';
        }
      });
  }
}
