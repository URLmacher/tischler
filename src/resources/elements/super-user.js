import { bindable } from 'aurelia-framework';
import { baseUrl } from 'CONFIG';

export class SuperUser {
  @bindable username;

  async logOut() {
    const json = await fetch(`${baseUrl}/backend/logout.php`);
    const data = await json.json();
    console.log(data);
    if (data.success) {
      console.log('logging out...');
      location.replace(baseUrl);
    }
  }
}
