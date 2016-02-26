import { gallery } from './gallery';
import { galleryComponent } from './gallery.component';
import { GalleryController } from './gallery.controller';
import { describe, beforeEach, it, expect } from 'jasmine';

// contains lame tests, but you get the idea

describe('Gallery', () => {
  let controllerCtor;

  beforeEach(window.module(gallery.name));
  beforeEach(() => {
    controllerCtor = (injectables) => new GalleryController(injectables);
  });

  describe('module', () => {
    it('should have an appropriate name', () => {
      expect(gallery.name).toEqual('gallery');
    });
  });

  describe('component', () => {
    let sut;
    beforeEach(() => {
      sut = galleryComponent();
    });

    it('should have the right controller', () => {
      expect(sut.controller).toEqual(GalleryController);
    });
  });

  describe('controller', () => {
    let controller;
    beforeEach(() => {
      controller = controllerCtor();
    });

    it('should have gallery items', () => {
      expect(typeof controller.giphs).toBe('object');
      expect(controller.giphs.length).toBeDefined();
    });
  });
});
