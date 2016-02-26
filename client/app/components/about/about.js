import angular from 'angular';
import { aboutComponent } from './about.component';

export const about = angular.module('about', [])
.config(($stateProvider) => {
  $stateProvider.state('about', {
    url: '/about',
    template: '<about></about>'
  });
})
.component('about', aboutComponent);
