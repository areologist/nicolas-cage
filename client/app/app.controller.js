class AppController {
  constructor() {
    this.links = [
      { name: 'Gallery', component: 'gallery' },
      { name: 'About', component: 'about' }
    ];
  }
}

AppController.$inject = [];

export { AppController };
