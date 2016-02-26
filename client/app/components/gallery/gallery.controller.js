class GalleryController {
  constructor(giphyApi) {
    this.giphy = giphyApi;
    this.title = 'Gallery';
    this.giphs = [];

    this.pageSizeVM = '10';
    this.pageSize = 10;
    this.offset = 0;
  }

  $onInit() {
    this.loadRandom();
  }

  loadRandom() {
    this.giphy.getRandomized(this.pageSize)
      .then(data => {
        this.giphs = data;
        return this.giphs;
      });
  }

  updatePageSize() {
    this.pageSize = +this.pageSizeVM;
    this.loadRandom();
  }
}

GalleryController.$inject = ['giphyApi'];

export { GalleryController };
