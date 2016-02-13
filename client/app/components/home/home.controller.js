class HomeController {
  constructor(giphy) {
    this.giphy = giphy;
    this.title = 'Nicolas Cage';
    this.stickers = [];
    this.loadStickers();
  }

  loadStickers() {
    this.giphy.getFeatured()
      .then(images => this.stickers = images);
  }
}

// necessary to survive minification
HomeController.$inject = ['giphy'];

export {HomeController};
