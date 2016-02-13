import angular from 'angular';
import {navbar} from './navbar/navbar';
import {footer} from './footer/footer';
import {constants} from './constants';
import {giphy} from './giphy';

export const shared = angular.module('shared', [
    navbar.name,
    footer.name
  ])
  .constant('constants', constants)
  .factory('giphy', giphy);
