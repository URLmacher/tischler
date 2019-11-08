import { imageContext } from 'images';

export class Products {
  constructor() {
    this.products = [
      {
        title: 'Objektbau',
        img: imageContext('./assets/images/img_card_placeholder.jpg'),
        bodytitle: 'Lorem Ipsum',
        bodytext:
          'Ein Projekt startet und doch es gibt noch keinen Text, allerdings sollte das Layout schon bald präsentiert werden ... was tun?Damit das Projekt gleich starten kann benutze einfach etwas Lorem ipsum - Blind-, Füll-, Dummy-, Nachahmungs-, Platzhaltertext.'
      },
      {
        title: 'Abholzen',
        img: imageContext('./assets/images/img_card_placeholder.jpg'),
        bodytitle: 'Dolorum anal',
        bodytext:
          'Generiere einfach soviel Lorem Ipsum Text wie du brauchst, kopiere und füge ihn in dein Layout als vorübergehenden Platzhalter ein. Somit sieht das Projekt ein Stückchen vollständiger aus als zuvor. Viel Spaß dabei.'
      },
      {
        title: 'Abholzen',
        img: imageContext('./assets/images/img_card_placeholder.jpg'),
        bodytitle: 'Dolorum anal',
        bodytext:
          'Generiere einfach soviel Lorem Ipsum Text wie du brauchst, kopiere und füge ihn in dein Layout als vorübergehenden Platzhalter ein. Somit sieht das Projekt ein Stückchen vollständiger aus als zuvor. Viel Spaß dabei.'
      }
    ];
  }
}
