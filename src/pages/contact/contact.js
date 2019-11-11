import { HttpClient } from 'aurelia-fetch-client';

export class Contact {
  constructor() {
    this.inputLabel1 = 'Name';
    this.inputLabel2 = 'Email';
    this.textAreaLabel = 'Nachricht';
    this.buttonText = 'Senden';
  }

  attached() {
    // this.serverCall();
  }

  serverCall() {
    let postData = { test: 'test' };
    let httpClient = new HttpClient();

    httpClient
      .fetch('http://tischler.loc/backend/mail.php', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(postData)
      })
      .then(result => result.json())
      .then(data => {
        console.log(data);
      });
  }
}
