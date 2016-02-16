class HomeController {
  constructor(giphyApi) {
    this.giphy = giphyApi;
    this.title = 'Nicolas Cage';
    this.giphs = [];
  }

  $onInit() {
    this.loadGiphs();
  }

  loadGiphs() {
    this.giphy.getRandomized(4)
      .then(data => this.giphs = data);
  }
}

HomeController.$inject = ['giphyApi'];

export {HomeController};
