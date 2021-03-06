import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { baseUrl } from 'CONFIG';

@inject(EventAggregator)
export class Login {
  constructor(ea) {
    this.ea = ea;
    this.inputName = {
      value: '',
      label: 'Benutzername',
      error: false,
      errorText: ''
    };
    this.inputPassword = { value: '', error: false, errorText: '' };
    this.buttonText = 'anmelden';
  }

  attached() {
    this.ea.subscribe('anmelden', value => {
      this.serverCall(this.inputName.value, this.inputPassword.value);
    });
  }

  serverCall(name, password) {
    let postData = { name: name, password: password };
    let httpClient = new HttpClient();

    httpClient
      .fetch(`${baseUrl}/backend/login.php`, {
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
          location.replace(baseUrl);
        } else {
          if (data.errors.hasOwnProperty('name')) {
            this.inputName.error = true;
            this.inputName.errorText = data.errors.name;
          }
          if (data.errors.hasOwnProperty('password')) {
            this.inputPassword.error = true;
            this.inputPassword.errorText = data.errors.password;
          }
        }
      });
  }
}
