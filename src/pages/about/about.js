import SimpleBar from 'simplebar';

export class About {
  constructor() {
    this.articles = [
      {
        img: './assets/images/hobeln.jpg',
        title: 'Blablabla',
        text:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam magnam aperiam dolore amet, tempore sed corporis recusandae, rem voluptatibus ut ea accusamus. Doloribus, dolorum sed asperiores beatae ducimus molestias fugit?'
      },
      {
        img: './assets/images/tree.jpg',
        title: 'Eine weitere Geschichte',
        text:
          ' Architecto minus aliquam eveniet deserunt quidem recusandae explicabo minima sapiente dolores. Magni sequi impedit, deserunt aliquam illo porro amet aliquid quis nam temporibus. Soluta magni quidem reiciendis vero laudantium nobis cupiditate repudiandae, in perferendis nemo asperiores, illo ipsa omnis fugiat voluptate praesentium facilis cum veritatis itaque dignissimos dolorum ad similique. Quae, enim. Reprehenderit! Nemo debitis vero est magnam, praesentium dignissimos. Tempora, quidem ad perspiciatis magnam incidunt eum dolorum a rem harum ut repellat ducimus quos, ipsam ipsum debitis possimus. Nesciunt saepe impedit odio.'
      },
      {
        title: 'Noch sowas',
        text:
          'Nesciunt saepe impedit odio. Delectus, vitae hic odit nisi et nihil fugit eos neque quisquam ratione porro perspiciatis sint libero assumenda earum quaerat, numquam omnis vel, vero obcaecati?'
      }
    ];
  }

  attached() {
    new SimpleBar(this.aboutElement, { forceVisible: true, autoHide: false });
  }
}
