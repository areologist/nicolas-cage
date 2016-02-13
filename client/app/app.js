import 'normalize.css';

import {appComponent} from './app.component';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {shared} from './shared/shared';
import {home} from './components/home/home';
import {gallery} from './components/gallery/gallery';
import {about} from './components/about/about';

angular.module('app', [
  uiRouter,
  shared.name,
  home.name,
  gallery.name,
  about.name
])
.component('app', appComponent);
