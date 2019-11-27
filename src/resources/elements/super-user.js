import { bindable } from 'aurelia-framework';
import { baseUrl } from 'CONFIG';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class SuperUser {
  @bindable username;
  formOpen = false;

  constructor(ea) {
    this.btns = {
      edit: 'edit',
      save: 'save',
      close: 'close',
      logout: 'logout',
      secondary: 'secondary',
      add: 'add'
    };
    this.ea = ea;
    this.ea.subscribe('router:navigation:complete', response => {
      this.formOpen = false;
      this.addFormOpen = false;
    });
  }

  startEdit() {
    this.ea.publish('openForm', this.username);
    this.formOpen = true;
    this.addFormOpen = false;
  }

  startAdd() {
    this.ea.publish('openAddForm', this.username);
    this.formOpen = false;
    this.addFormOpen = true;
  }

  closeEdit() {
    this.ea.publish('closeForm', 'nix');
    this.formOpen = false;
    this.addFormOpen = false;
  }

  saveEdit() {
    this.ea.publish('saveForm', this.username);
  }

  saveAdd() {
    this.ea.publish('saveAddForm', this.username);
  }

  async logOut() {
    const json = await fetch(`${baseUrl}/backend/logout.php`);
    const data = await json.json();
    if (data.success) {
      location.replace(baseUrl);
    }
  }
}
