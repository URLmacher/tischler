import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Contact {
  constructor(ea) {
    this.ea = ea;
    this.inputNameValue = '';
    this.inputEmailValue = '';
    this.textAreaValue = '';
    this.buttonText = 'Senden';
  }

  attached() {
    this.ea.subscribe('form-submitted', value => {
      this.serverCall(this.inputNameValue, this.inputEmailValue, this.textAreaValue);
    });
  }

  serverCall(name, email, msg) {
    let postData = { name: name, email: email, msg: msg };
    let httpClient = new HttpClient();

    httpClient
      .fetch('http://tischler.loc/backend/mail.php', {
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
        console.log(data);
      });
  }
}
