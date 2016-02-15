import angular from 'angular';
import {navbar} from './navbar/navbar';
import {footer} from './footer/footer';
import {constants} from './constants';
import {giphyCache} from './giphyCache';
import {giphyApi} from './giphyApi';

export const shared = angular.module('shared', [
  navbar.name,
  footer.name
])
.constant('constants', constants)
.factory('giphyCache', giphyCache)
.factory('giphyApi', giphyApi);
