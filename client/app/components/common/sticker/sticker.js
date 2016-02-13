import angular from 'angular';
import {stickerComponent} from './sticker.component';

export const sticker = angular.module('sticker', [])
  .component('sticker', stickerComponent);
