import {gallery} from './gallery';
import {galleryComponent} from './gallery.component';
import {GalleryController} from './gallery.controller';

// contains lame tests, but you get the idea

describe('Gallery', () => {
  let $rootScope;
  let controllerCtor;

  beforeEach(window.module(gallery.name));
  beforeEach(inject(_$rootScope_ => {
    $rootScope = _$rootScope_;
    controllerCtor = (injectables) => {
      return new GalleryController(injectables);
    };
  }))

  describe('module', () => {
    it('should have an appropriate name', () => {
      expect(gallery.name).toEqual('gallery');
    });
  });

  describe('component', () => {
    let sut;
    beforeEach(() => sut = galleryComponent());

    it('should have the right controller', () => {
      expect(sut.controller).toEqual(GalleryController);
    });
  });

  describe('controller', () => {
    let controller;
    beforeEach(() => controller = controllerCtor());

    it('should have gallery items', () => {
      expect(typeof controller.stickers).toBe('object');
      expect(controller.stickers.length).toBeDefined();
    });
  });
});
