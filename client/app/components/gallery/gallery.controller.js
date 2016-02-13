class GalleryController {
  constructor(giphy) {
    this.giphy = giphy;
    this.title = 'Gallery';
    this.stickers = [];
    this.loadStickers();
  }

  loadStickers() {
    this.giphy.getCage()
      .then(data => this.stickers = data);
  }
}

GalleryController.$inject = ['giphy'];

export {GalleryController};
