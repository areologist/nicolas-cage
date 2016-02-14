import angular from 'angular';
import {galleryComponent} from './gallery.component';
import {giph} from '../common/giph/giph';

export const gallery = angular.module('gallery', [
  giph.name
])
.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider.state('gallery', {
    url: '/gallery',
    template: '<gallery></gallery>'
  });
})
.component('gallery', galleryComponent);
