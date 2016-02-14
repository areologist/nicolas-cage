class GalleryController {
  constructor(giphyApi) {
    this.giphy = giphyApi;
    this.title = 'Gallery';
    this.giphs = [];

    this.pageSizeVM = '10';
    this.pageSize = 10;
    this.offset = 0;

    this.loadRandom();
  }

  /*
  loadGiphs() {
    this.giphy.getCage(this.pageSize, this.offset)
      .then(data => this.giphs = data);
  }
  next() {
    this.offset += this.pageSize;
    this.loadGiphs();
  }
  prev() {
    this.offset -= this.pageSize;
    if (this.offset < 0) {
      this.offset = 0;
    }
    this.loadGiphs();
  }
  hasPrev() {
    return this.offset > 0;
  }*/

  loadRandom() {
    this.random = true;
    this.giphy.getRandomized(this.pageSize)
      .then(data => this.giphs = data);
  }

  updatePageSize() {
    this.pageSize = +this.pageSizeVM;
    this.loadRandom();
  }
}

GalleryController.$inject = ['giphyApi'];

export {GalleryController};
