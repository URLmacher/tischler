import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Contact {
  constructor(ea) {
    this.ea = ea;
    this.inputName = { value: '', label: 'Name', error: false, errorText: '' };
    this.inputEmail = { value: '', error: false, errorText: '' };
    this.textArea = { value: '', error: false, errorText: '' };
    this.sendBtn = { text: 'Senden', event: 'form-submitted' };
    this.backBtn = { text: 'Zurück', event: 'zurück' };
    this.msgReceived = true;
  }

  attached() {
    this.ea.subscribe('form-submitted', value => {
      this.serverCall(
        this.inputName.value,
        this.inputEmail.value,
        this.textArea.value
      );
    });
    this.ea.subscribe('zurück', value => {
      this.msgReceived = !this.msgReceived;
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
        if (data.success) {
          this.msgReceived = true;
        } else {
          if (data.errors.hasOwnProperty('name')) {
            this.inputName.error = true;
            this.inputName.errorText = data.errors.name;
          }
          if (data.errors.hasOwnProperty('email')) {
            this.inputEmail.error = true;
            this.inputEmail.errorText = data.errors.email;
          }
          if (data.errors.hasOwnProperty('msg')) {
            this.textArea.error = true;
            this.textArea.errorText = data.errors.msg;
          }
        }
      });
  }
}
