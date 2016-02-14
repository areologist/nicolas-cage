import angular from 'angular';
import {home} from './home/home';
import {gallery} from './gallery/gallery';
import {about} from './about/about';

const components = angular.module('app.components', [
  home.name,
  about.name,
  gallery.name
]);

export {components};
