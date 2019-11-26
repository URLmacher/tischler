import { bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { HttpClient } from 'aurelia-fetch-client';
import { baseUrl } from 'CONFIG';

@inject(EventAggregator)
export class EditForm {
  @bindable contents;
  formOpen = false;

  constructor(eventAggregator) {
    this.ea = eventAggregator;
    this.labelsPrefilled = true;
    this.contents = [
      { title: 'Hund', img: 'imgurl', text: 'Irgendein Scheisstext' },
      { title: 'Kot', img: 'imgurl', text: 'Irgendein Scheisstext' },
      { title: 'Derck', img: 'imgurl', text: 'Irgendein Scheisstext' },
      { title: 'Hund', img: 'imgurl', text: 'Irgendein Scheisstext' },
      { title: 'Kot', img: 'imgurl', text: 'Irgendein Scheisstext' },
      { title: 'Derck', img: 'imgurl', text: 'Irgendein Scheisstext' }
    ];
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
      this.formOpen = false;
    });
    this.ea.subscribe('saveForm', value => {
      this.saveForm();
    });
  }

  saveForm() {
    let postData = { content: this.contents };
    let httpClient = new HttpClient();

    httpClient
      .fetch(`${baseUrl}/backend/store.php`, {
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
          this.formOpen = false;
          console.log('Erfolg');
        } else {
          console.log(data);
        }
      });
  }
}
