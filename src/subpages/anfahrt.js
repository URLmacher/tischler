import { apiKey } from 'CONFIG';

export class Anfahrt {
  constructor() {
    this.mapSrc = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJqVrD7wo1bkcRYdPCcLZcjTo&key=${apiKey}`;
  }
}
