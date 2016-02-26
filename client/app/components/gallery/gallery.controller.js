class GalleryController {
  constructor(giphyApi, $rootScope) {
    this.giphy = giphyApi;
    this.$rootScope = $rootScope;
    this.title = 'Gallery';
    this.giphs = [];

    this.pageSizeVM = '10';
    this.pageSize = 10;
    this.offset = 0;
  }

  $onInit() {
    this.loadRandom();
  }

  async loadRandom() {
    const data = await this.giphy.getRandom({ limitTo: this.pageSize });
    this.giphs = data;
    // just a demonstration of async/await -- don't recommend using this
    // in ng 1.x due to the digest cycle and bullshit like this:
    this.$rootScope.$apply();
  }

  updatePageSize() {
    this.pageSize = +this.pageSizeVM;
    this.loadRandom();
  }
}

GalleryController.$inject = ['giphyApi', '$rootScope'];

export { GalleryController };
