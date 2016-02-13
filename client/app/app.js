import 'normalize.css';

import {appComponent} from './app.component';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import {shared} from './shared/shared';
import {home} from './components/home/home';

angular.module('app', [
  uiRouter,
  shared.name,
  home.name
])
.component('app', appComponent);
