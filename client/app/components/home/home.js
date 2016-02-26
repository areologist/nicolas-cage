import angular from 'angular';
import { homeComponent } from './home.component';
import { giph } from '../common/giph/giph';

export const home = angular.module('home', [
  giph.name
])
.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home', {
    url: '/',
    template: '<home></home>'
  });
})
.component('home', homeComponent);
