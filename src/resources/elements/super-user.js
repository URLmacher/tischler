import { bindable } from 'aurelia-framework';
import { baseUrl } from 'CONFIG';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class SuperUser {
  @bindable username = 'Niemand'
  formOpen = false;

  constructor(ea) {
    this.btns = {
      edit: 'edit',
      save: 'save',
      close: 'close',
      logout: 'logout',
      secondary: 'secondary'
    };
    this.ea = ea;
    this.ea.subscribe('router:navigation:complete', response => {
      this.formOpen = false;
    });
  }

  startEdit() {
    this.ea.publish('openForm', this.username);
    this.formOpen = true;
  }

  closeEdit() {
    this.ea.publish('closeForm', 'nix');
    this.formOpen = false;
  }

  saveEdit() {
    if (this.formOpen) {
      this.ea.publish('saveForm', this.username);
      this.formOpen = true;
    }
  }

  async logOut() {
    const json = await fetch(`${baseUrl}/backend/logout.php`);
    const data = await json.json();
    if (data.success) {
      location.replace(baseUrl);
    }
  }
}
