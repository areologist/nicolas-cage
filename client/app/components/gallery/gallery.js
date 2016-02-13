import angular from 'angular';
import {galleryComponent} from './gallery.component';
import {sticker} from '../common/sticker/sticker';

export const gallery = angular.module('gallery', [
  sticker.name
])
.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider.state('gallery', {
    url: '/gallery',
    template: '<gallery></gallery>'
  });
})
.component('gallery', galleryComponent);
