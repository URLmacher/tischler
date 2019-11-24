import { baseUrl } from 'CONFIG';

export class Impressum {
  constructor() {
    this.contactInfoTitle = 'Für den Inhalt verantwortlich:';
    this.getContent();
  }

  async getContent() {
    const json = await fetch(`${baseUrl}/backend/content.php?area=impressum`);
    const data = await json.json();
    this.contactInfos = data.content;
  }
}
