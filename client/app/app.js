import 'normalize.css';
import 'font-awesome-webpack';

import { appComponent } from './app.component';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import { shared } from './shared/shared';
import { components } from './components/components';

angular.module('app', [
  uiRouter,
  ngAnimate,
  shared.name,
  components.name
])
.component('app', appComponent);
