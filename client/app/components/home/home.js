import angular from 'angular';
import {homeComponent} from './home.component';
import {sticker} from '../common/sticker/sticker';

export const home = angular.module('home', [
  sticker.name
])
.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home', {
    url: '/',
    template: '<home></home>'
  });
})
.component('home', homeComponent);
