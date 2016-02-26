import angular from 'angular';
import { giphComponent } from './giph.component';

export const giph = angular.module('giph', [])
  .directive('giph', giphComponent);
